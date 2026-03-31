import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import {
  getPosts, getPost, createPost, updatePost, deletePost,
  getComments, createComment, deleteComment,
  toggleLike, getUserLikes,
} from '../utils/communityStorage';

const CATEGORIES = [
  { value: '', label: '전체' },
  { value: 'qna', label: 'Q&A' },
  { value: 'share', label: '자료 공유' },
  { value: 'feedback', label: '피드백' },
];

const categoryLabel = (v) => CATEGORIES.find(c => c.value === v)?.label || v;

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  const now = new Date();
  const diff = now - d;
  if (diff < 60000) return '방금 전';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}분 전`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}시간 전`;
  return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
};

const POSTS_PER_PAGE = 12;

const Community = () => {
  const { user, isAuthenticated, getUserName } = useAuth();
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();

  // View: list | write | detail | edit
  const [view, setView] = useState('list');
  const [category, setCategory] = useState('');
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Detail
  const [currentPost, setCurrentPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [userLikes, setUserLikes] = useState(new Set());

  // Form
  const [formCategory, setFormCategory] = useState('qna');
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Load posts
  const loadPosts = useCallback(async () => {
    setLoading(true);
    const { data, count } = await getPosts({ category: category || undefined, page, limit: POSTS_PER_PAGE });
    setPosts(data);
    setTotalCount(count);
    setLoading(false);
  }, [category, page]);

  useEffect(() => {
    if (view === 'list') loadPosts();
  }, [view, loadPosts]);

  // Load user likes
  useEffect(() => {
    if (user) {
      getUserLikes(user.id).then(setUserLikes);
    }
  }, [user]);

  // URL sync: ?post=123
  useEffect(() => {
    const postId = searchParams.get('post');
    if (postId) {
      openDetail(Number(postId));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const openDetail = async (id) => {
    const post = await getPost(id);
    if (!post) {
      toast.error('게시글을 찾을 수 없습니다.');
      return;
    }
    setCurrentPost(post);
    setView('detail');
    setSearchParams({ post: id });
    const cmts = await getComments(id);
    setComments(cmts);
    window.scrollTo(0, 0);
  };

  const goList = () => {
    setView('list');
    setCurrentPost(null);
    setSearchParams({});
  };

  // Create post
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      toast.error('제목과 내용을 입력해주세요.');
      return;
    }
    setSubmitting(true);
    const result = await createPost({
      category: formCategory,
      title: formTitle.trim(),
      content: formContent.trim(),
      authorId: user.id,
    });
    setSubmitting(false);
    if (result) {
      toast.success('게시글이 등록되었습니다.');
      setFormTitle('');
      setFormContent('');
      goList();
    } else {
      toast.error('등록에 실패했습니다.');
    }
  };

  // Edit post
  const handleEdit = async (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) return;
    setSubmitting(true);
    const result = await updatePost(currentPost.id, {
      title: formTitle.trim(),
      content: formContent.trim(),
    });
    setSubmitting(false);
    if (result) {
      toast.success('수정되었습니다.');
      openDetail(currentPost.id);
    } else {
      toast.error('수정에 실패했습니다.');
    }
  };

  const startEdit = () => {
    setFormTitle(currentPost.title);
    setFormContent(currentPost.content);
    setFormCategory(currentPost.category);
    setView('edit');
  };

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    const ok = await deletePost(currentPost.id);
    if (ok) {
      toast.success('삭제되었습니다.');
      goList();
    } else {
      toast.error('삭제에 실패했습니다.');
    }
  };

  // Like
  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      return;
    }
    const liked = await toggleLike(currentPost.id, user.id);
    setCurrentPost(prev => ({
      ...prev,
      like_count: prev.like_count + (liked ? 1 : -1),
    }));
    setUserLikes(prev => {
      const next = new Set(prev);
      liked ? next.add(currentPost.id) : next.delete(currentPost.id);
      return next;
    });
  };

  // Comments
  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    if (!isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      return;
    }
    const result = await createComment({
      postId: currentPost.id,
      content: commentText.trim(),
      authorId: user.id,
    });
    if (result) {
      setCommentText('');
      const cmts = await getComments(currentPost.id);
      setComments(cmts);
    }
  };

  const handleDeleteComment = async (id) => {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    await deleteComment(id);
    const cmts = await getComments(currentPost.id);
    setComments(cmts);
  };

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  // ── Render: List ──
  const renderList = () => (
    <>
      <div className="community-toolbar">
        <div className="community-tabs">
          {CATEGORIES.map(c => (
            <button
              key={c.value}
              className={`community-tab ${category === c.value ? 'active' : ''}`}
              onClick={() => { setCategory(c.value); setPage(1); }}
            >
              {c.label}
            </button>
          ))}
        </div>
        {isAuthenticated && (
          <button
            className="btn btn-primary"
            onClick={() => { setFormTitle(''); setFormContent(''); setFormCategory('qna'); setView('write'); }}
          >
            글쓰기
          </button>
        )}
      </div>

      <div className="community-list">
        <div className="community-row community-row-header">
          <span>분류</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
          <span>조회/좋아요</span>
        </div>

        {loading ? (
          <div className="community-empty">
            <div className="community-empty-text">불러오는 중...</div>
          </div>
        ) : posts.length === 0 ? (
          <div className="community-empty">
            <div className="community-empty-icon">📝</div>
            <div className="community-empty-text">
              아직 게시글이 없습니다. {isAuthenticated ? '첫 글을 작성해보세요!' : '로그인 후 글을 작성할 수 있습니다.'}
            </div>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="community-row" onClick={() => openDetail(post.id)}>
              <span className="community-row-category">{categoryLabel(post.category)}</span>
              <span className="community-row-title">{post.title}</span>
              <span className="community-row-author">{post.author_id?.slice(0, 8) || '-'}</span>
              <span className="community-row-date">{formatDate(post.created_at)}</span>
              <span className="community-row-stats">
                <span>👁 {post.view_count}</span>
                <span>♥ {post.like_count}</span>
              </span>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="community-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`community-page-btn ${page === p ? 'active' : ''}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );

  // ── Render: Write / Edit ──
  const renderForm = () => (
    <form className="community-form" onSubmit={view === 'write' ? handleCreate : handleEdit}>
      <h2 className="community-form-title">{view === 'write' ? '새 글 작성' : '글 수정'}</h2>

      <div className="community-form-group">
        <label className="community-form-label">분류</label>
        <select
          className="community-form-select"
          value={formCategory}
          onChange={e => setFormCategory(e.target.value)}
          disabled={view === 'edit'}
        >
          {CATEGORIES.filter(c => c.value).map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div className="community-form-group">
        <label className="community-form-label">제목</label>
        <input
          className="community-form-input"
          value={formTitle}
          onChange={e => setFormTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          maxLength={100}
        />
      </div>

      <div className="community-form-group">
        <label className="community-form-label">내용</label>
        <textarea
          className="community-form-textarea"
          value={formContent}
          onChange={e => setFormContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </div>

      <div className="community-form-actions">
        <button type="button" className="btn btn-secondary" onClick={view === 'edit' ? () => openDetail(currentPost.id) : goList}>
          취소
        </button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? '저장 중...' : (view === 'write' ? '등록' : '수정')}
        </button>
      </div>
    </form>
  );

  // ── Render: Detail ──
  const renderDetail = () => {
    if (!currentPost) return null;
    const isAuthor = user && user.id === currentPost.author_id;

    return (
      <>
        <div style={{ marginBottom: 16 }}>
          <button className="btn btn-secondary" onClick={goList}>← 목록으로</button>
        </div>

        <div className="community-detail">
          <div className="community-detail-header">
            <span className="community-detail-category">{categoryLabel(currentPost.category)}</span>
            <h1 className="community-detail-title">{currentPost.title}</h1>
            <div className="community-detail-meta">
              <span>👁 조회 {currentPost.view_count}</span>
              <span>♥ 좋아요 {currentPost.like_count}</span>
              <span>{formatDate(currentPost.created_at)}</span>
            </div>
          </div>

          <div className="community-detail-body">
            {currentPost.content}
          </div>

          <div className="community-detail-footer">
            <button
              className={`community-like-btn ${userLikes.has(currentPost.id) ? 'liked' : ''}`}
              onClick={handleLike}
            >
              ♥ 좋아요 {currentPost.like_count}
            </button>
            {isAuthor && (
              <div className="community-detail-actions">
                <button className="btn btn-secondary" onClick={startEdit}>수정</button>
                <button className="btn btn-secondary" onClick={handleDelete} style={{ color: '#ef4444' }}>삭제</button>
              </div>
            )}
          </div>
        </div>

        {/* Comments */}
        <div className="community-comments">
          <div className="community-comments-title">댓글 {comments.length}개</div>
          {comments.map(c => (
            <div key={c.id} className="community-comment">
              <div className="community-comment-header">
                <div>
                  <span className="community-comment-author">{c.author_id?.slice(0, 8)}</span>
                  <span className="community-comment-date" style={{ marginLeft: 12 }}>{formatDate(c.created_at)}</span>
                </div>
                {user && user.id === c.author_id && (
                  <button className="community-comment-delete" onClick={() => handleDeleteComment(c.id)}>삭제</button>
                )}
              </div>
              <div className="community-comment-body">{c.content}</div>
            </div>
          ))}

          {isAuthenticated ? (
            <form className="community-comment-form" onSubmit={handleComment}>
              <textarea
                className="community-comment-input"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                placeholder="댓글을 입력하세요"
                rows={1}
              />
              <button type="submit" className="btn btn-primary">등록</button>
            </form>
          ) : (
            <div className="community-comment-form" style={{ justifyContent: 'center' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-light)' }}>로그인 후 댓글을 작성할 수 있습니다.</span>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <SEOHead
        title="커뮤니티"
        description="프레젠테이션 커뮤니티 - 발표 노하우를 공유하고 함께 성장하세요"
        path="/community"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">커뮤니티</h1>
          <p className="about-hero-desc">
            프레젠테이션 노하우를 공유하고 함께 성장하는 공간입니다.
          </p>
        </div>
      </section>

      <section className="community-board">
        <div className="container">
          {view === 'list' && renderList()}
          {(view === 'write' || view === 'edit') && renderForm()}
          {view === 'detail' && renderDetail()}
        </div>
      </section>
    </>
  );
};

export default Community;
