import { useReducer, useEffect, useCallback } from 'react';
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

const categoryLabel = (v: string) => CATEGORIES.find(c => c.value === v)?.label || v;

const formatDate = (iso: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  if (diff < 60000) return '방금 전';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}분 전`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}시간 전`;
  return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
};

const POSTS_PER_PAGE = 12;

/* ── Types ── */
interface Post {
  id: number;
  category: string;
  title: string;
  content: string;
  author_id: string;
  view_count: number;
  like_count: number;
  created_at: string;
}

interface Comment {
  id: number;
  post_id: number;
  content: string;
  author_id: string;
  created_at: string;
}

type ViewMode = 'list' | 'write' | 'detail' | 'edit';

interface State {
  view: ViewMode;
  category: string;
  posts: Post[];
  totalCount: number;
  page: number;
  loading: boolean;
  currentPost: Post | null;
  comments: Comment[];
  commentText: string;
  userLikes: Set<number>;
  formCategory: string;
  formTitle: string;
  formContent: string;
  submitting: boolean;
}

type Action =
  | { type: 'SET_VIEW'; payload: ViewMode }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'LOAD_POSTS_START' }
  | { type: 'LOAD_POSTS_DONE'; payload: { data: Post[]; count: number } }
  | { type: 'LOAD_POSTS_ERROR' }
  | { type: 'OPEN_DETAIL'; payload: { post: Post; comments: Comment[] } }
  | { type: 'GO_LIST' }
  | { type: 'START_WRITE' }
  | { type: 'START_EDIT' }
  | { type: 'SET_FORM_FIELD'; field: string; value: string }
  | { type: 'SET_SUBMITTING'; payload: boolean }
  | { type: 'SET_COMMENTS'; payload: Comment[] }
  | { type: 'SET_COMMENT_TEXT'; payload: string }
  | { type: 'SET_USER_LIKES'; payload: Set<number> }
  | { type: 'UPDATE_POST_LIKE'; payload: { liked: boolean; postId: number } };

/* ── Reducer ── */
const initialState: State = {
  view: 'list',
  category: '',
  posts: [],
  totalCount: 0,
  page: 1,
  loading: true,
  currentPost: null,
  comments: [],
  commentText: '',
  userLikes: new Set(),
  formCategory: 'qna',
  formTitle: '',
  formContent: '',
  submitting: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, view: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload, page: 1 };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'LOAD_POSTS_START':
      return { ...state, loading: true };
    case 'LOAD_POSTS_DONE':
      return { ...state, loading: false, posts: action.payload.data, totalCount: action.payload.count };
    case 'LOAD_POSTS_ERROR':
      return { ...state, loading: false, posts: [], totalCount: 0 };
    case 'OPEN_DETAIL':
      return { ...state, view: 'detail', currentPost: action.payload.post, comments: action.payload.comments };
    case 'GO_LIST':
      return { ...state, view: 'list', currentPost: null };
    case 'START_WRITE':
      return { ...state, view: 'write', formTitle: '', formContent: '', formCategory: 'qna' };
    case 'START_EDIT':
      return {
        ...state,
        view: 'edit',
        formTitle: state.currentPost?.title ?? '',
        formContent: state.currentPost?.content ?? '',
        formCategory: state.currentPost?.category ?? 'qna',
      };
    case 'SET_FORM_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_SUBMITTING':
      return { ...state, submitting: action.payload };
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload };
    case 'SET_COMMENT_TEXT':
      return { ...state, commentText: action.payload };
    case 'SET_USER_LIKES':
      return { ...state, userLikes: action.payload };
    case 'UPDATE_POST_LIKE': {
      const { liked, postId } = action.payload;
      const nextLikes = new Set(state.userLikes);
      liked ? nextLikes.add(postId) : nextLikes.delete(postId);
      return {
        ...state,
        userLikes: nextLikes,
        currentPost: state.currentPost
          ? { ...state.currentPost, like_count: state.currentPost.like_count + (liked ? 1 : -1) }
          : null,
      };
    }
    default:
      return state;
  }
};

const Community = () => {
  const { user, isAuthenticated, getUserName: _getUserName } = useAuth();
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    view, category, posts, totalCount, page, loading,
    currentPost, comments, commentText, userLikes,
    formCategory, formTitle, formContent, submitting,
  } = state;

  // Load posts
  const loadPosts = useCallback(async () => {
    dispatch({ type: 'LOAD_POSTS_START' });
    try {
      const { data, count } = await getPosts({ category: category || undefined, page, limit: POSTS_PER_PAGE });
      dispatch({ type: 'LOAD_POSTS_DONE', payload: { data: data as Post[], count } });
    } catch {
      dispatch({ type: 'LOAD_POSTS_ERROR' });
      toast.error('게시글을 불러오지 못했습니다.');
    }
  }, [category, page, toast]);

  useEffect(() => {
    if (view === 'list') loadPosts();
  }, [view, loadPosts]);

  // Load user likes
  useEffect(() => {
    if (user) {
      getUserLikes(user.id).then(likes => dispatch({ type: 'SET_USER_LIKES', payload: likes }));
    }
  }, [user]);

  // URL sync: ?post=123
  useEffect(() => {
    const postId = searchParams.get('post');
    if (postId) {
      openDetail(Number(postId));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const openDetail = async (id: number) => {
    try {
      const post = await getPost(id);
      if (!post) {
        toast.error('게시글을 찾을 수 없습니다.');
        return;
      }
      const cmts = await getComments(id);
      dispatch({ type: 'OPEN_DETAIL', payload: { post: post as Post, comments: cmts as Comment[] } });
      setSearchParams({ post: String(id) });
      window.scrollTo(0, 0);
    } catch {
      toast.error('게시글을 불러오지 못했습니다.');
    }
  };

  const goList = () => {
    dispatch({ type: 'GO_LIST' });
    setSearchParams({});
  };

  // Create post
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      toast.error('제목과 내용을 입력해주세요.');
      return;
    }
    dispatch({ type: 'SET_SUBMITTING', payload: true });
    try {
      const result = await createPost({
        category: formCategory,
        title: formTitle.trim(),
        content: formContent.trim(),
        authorId: user!.id,
      });
      dispatch({ type: 'SET_SUBMITTING', payload: false });
      if (result) {
        toast.success('게시글이 등록되었습니다.');
        goList();
      } else {
        toast.error('등록에 실패했습니다.');
      }
    } catch {
      dispatch({ type: 'SET_SUBMITTING', payload: false });
      toast.error('등록 중 오류가 발생했습니다.');
    }
  };

  // Edit post
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) return;
    dispatch({ type: 'SET_SUBMITTING', payload: true });
    try {
      const result = await updatePost(currentPost!.id, {
        title: formTitle.trim(),
        content: formContent.trim(),
      });
      dispatch({ type: 'SET_SUBMITTING', payload: false });
      if (result) {
        toast.success('수정되었습니다.');
        openDetail(currentPost!.id);
      } else {
        toast.error('수정에 실패했습니다.');
      }
    } catch {
      dispatch({ type: 'SET_SUBMITTING', payload: false });
      toast.error('수정 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      const ok = await deletePost(currentPost!.id);
      if (ok) {
        toast.success('삭제되었습니다.');
        goList();
      } else {
        toast.error('삭제에 실패했습니다.');
      }
    } catch {
      toast.error('삭제 중 오류가 발생했습니다.');
    }
  };

  // Like
  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      return;
    }
    try {
      const liked = await toggleLike(currentPost!.id, user!.id);
      dispatch({ type: 'UPDATE_POST_LIKE', payload: { liked: !!liked, postId: currentPost!.id } });
    } catch {
      toast.error('좋아요 처리 중 오류가 발생했습니다.');
    }
  };

  // Comments
  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    if (!isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      return;
    }
    try {
      const result = await createComment({
        postId: currentPost!.id,
        content: commentText.trim(),
        authorId: user!.id,
      });
      if (result) {
        dispatch({ type: 'SET_COMMENT_TEXT', payload: '' });
        const cmts = await getComments(currentPost!.id);
        dispatch({ type: 'SET_COMMENTS', payload: cmts as Comment[] });
      }
    } catch {
      toast.error('댓글 등록에 실패했습니다.');
    }
  };

  const handleDeleteComment = async (id: number) => {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    try {
      await deleteComment(id);
      const cmts = await getComments(currentPost!.id);
      dispatch({ type: 'SET_COMMENTS', payload: cmts as Comment[] });
    } catch {
      toast.error('댓글 삭제에 실패했습니다.');
    }
  };

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  // ── Render: List ──
  const renderList = () => (
    <>
      <div className="community-toolbar">
        <div className="community-tabs" role="tablist" aria-label="게시판 카테고리">
          {CATEGORIES.map(c => (
            <button
              key={c.value}
              className={`community-tab ${category === c.value ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_CATEGORY', payload: c.value })}
              role="tab"
              aria-selected={category === c.value}
            >
              {c.label}
            </button>
          ))}
        </div>
        {isAuthenticated && (
          <button className="btn btn-primary" onClick={() => dispatch({ type: 'START_WRITE' })}>
            글쓰기
          </button>
        )}
      </div>

      <div className="community-list" role="table" aria-label="게시글 목록">
        <div className="community-row community-row-header" role="row">
          <span role="columnheader">분류</span>
          <span role="columnheader">제목</span>
          <span role="columnheader">작성자</span>
          <span role="columnheader">날짜</span>
          <span role="columnheader">조회/좋아요</span>
        </div>

        {loading ? (
          <div className="community-empty" role="status">
            <div className="community-empty-text">불러오는 중...</div>
          </div>
        ) : posts.length === 0 ? (
          <div className="community-empty">
            <div className="community-empty-icon" aria-hidden="true">📝</div>
            <div className="community-empty-text">
              아직 게시글이 없습니다. {isAuthenticated ? '첫 글을 작성해보세요!' : '로그인 후 글을 작성할 수 있습니다.'}
            </div>
          </div>
        ) : (
          posts.map(post => (
            <div
              key={post.id}
              className="community-row"
              onClick={() => openDetail(post.id)}
              onKeyDown={(e) => { if (e.key === 'Enter') openDetail(post.id); }}
              role="row"
              tabIndex={0}
              aria-label={`${categoryLabel(post.category)}: ${post.title}`}
            >
              <span className="community-row-category" role="cell">{categoryLabel(post.category)}</span>
              <span className="community-row-title" role="cell">{post.title}</span>
              <span className="community-row-author" role="cell">{post.author_id?.slice(0, 8) || '-'}</span>
              <span className="community-row-date" role="cell">{formatDate(post.created_at)}</span>
              <span className="community-row-stats" role="cell">
                <span aria-label={`조회수 ${post.view_count}`}>👁 {post.view_count}</span>
                <span aria-label={`좋아요 ${post.like_count}`}>♥ {post.like_count}</span>
              </span>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <nav className="community-pagination" aria-label="페이지 네비게이션">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`community-page-btn ${page === p ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_PAGE', payload: p })}
              aria-label={`${p}페이지`}
              aria-current={page === p ? 'page' : undefined}
            >
              {p}
            </button>
          ))}
        </nav>
      )}
    </>
  );

  // ── Render: Write / Edit ──
  const renderForm = () => (
    <form className="community-form" onSubmit={view === 'write' ? handleCreate : handleEdit}>
      <h2 className="community-form-title">{view === 'write' ? '새 글 작성' : '글 수정'}</h2>

      <div className="community-form-group">
        <label className="community-form-label" htmlFor="community-category">분류</label>
        <select
          id="community-category"
          className="community-form-select"
          value={formCategory}
          onChange={e => dispatch({ type: 'SET_FORM_FIELD', field: 'formCategory', value: e.target.value })}
          disabled={view === 'edit'}
        >
          {CATEGORIES.filter(c => c.value).map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div className="community-form-group">
        <label className="community-form-label" htmlFor="community-title">제목</label>
        <input
          id="community-title"
          className="community-form-input"
          value={formTitle}
          onChange={e => dispatch({ type: 'SET_FORM_FIELD', field: 'formTitle', value: e.target.value })}
          placeholder="제목을 입력하세요"
          maxLength={100}
          required
        />
      </div>

      <div className="community-form-group">
        <label className="community-form-label" htmlFor="community-content">내용</label>
        <textarea
          id="community-content"
          className="community-form-textarea"
          value={formContent}
          onChange={e => dispatch({ type: 'SET_FORM_FIELD', field: 'formContent', value: e.target.value })}
          placeholder="내용을 입력하세요"
          required
        />
      </div>

      <div className="community-form-actions">
        <button type="button" className="btn btn-secondary" onClick={view === 'edit' ? () => openDetail(currentPost!.id) : goList}>
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

        <article className="community-detail">
          <div className="community-detail-header">
            <span className="community-detail-category">{categoryLabel(currentPost.category)}</span>
            <h1 className="community-detail-title">{currentPost.title}</h1>
            <div className="community-detail-meta">
              <span aria-label={`조회수 ${currentPost.view_count}`}>👁 조회 {currentPost.view_count}</span>
              <span aria-label={`좋아요 ${currentPost.like_count}`}>♥ 좋아요 {currentPost.like_count}</span>
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
              aria-label={userLikes.has(currentPost.id) ? '좋아요 취소' : '좋아요'}
              aria-pressed={userLikes.has(currentPost.id)}
            >
              ♥ 좋아요 {currentPost.like_count}
            </button>
            {isAuthor && (
              <div className="community-detail-actions">
                <button className="btn btn-secondary" onClick={() => dispatch({ type: 'START_EDIT' })}>수정</button>
                <button className="btn btn-secondary" onClick={handleDelete} style={{ color: '#ef4444' }}>삭제</button>
              </div>
            )}
          </div>
        </article>

        {/* Comments */}
        <section className="community-comments" aria-label="댓글">
          <div className="community-comments-title">댓글 {comments.length}개</div>
          {comments.map(c => (
            <div key={c.id} className="community-comment">
              <div className="community-comment-header">
                <div>
                  <span className="community-comment-author">{c.author_id?.slice(0, 8)}</span>
                  <span className="community-comment-date" style={{ marginLeft: 12 }}>{formatDate(c.created_at)}</span>
                </div>
                {user && user.id === c.author_id && (
                  <button className="community-comment-delete" onClick={() => handleDeleteComment(c.id)} aria-label="댓글 삭제">삭제</button>
                )}
              </div>
              <div className="community-comment-body">{c.content}</div>
            </div>
          ))}

          {isAuthenticated ? (
            <form className="community-comment-form" onSubmit={handleComment}>
              <label htmlFor="comment-input" className="sr-only">댓글 입력</label>
              <textarea
                id="comment-input"
                className="community-comment-input"
                value={commentText}
                onChange={e => dispatch({ type: 'SET_COMMENT_TEXT', payload: e.target.value })}
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
        </section>
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
