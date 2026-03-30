import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { learningCategories, getLearningCategory, getLearningTopic } from '../../data/learning';

const renderMarkdown = (text) => {
  if (!text) return '';
  let html = text;
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '<br/>');
  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (match, header, rows) => {
    const ths = header.split('|').filter(Boolean).map(h => `<th>${h.trim()}</th>`).join('');
    const trs = rows.trim().split('\n').map(row => {
      const tds = row.split('|').filter(Boolean).map(d => `<td>${d.trim()}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
  });
  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  // Paragraphs
  html = html.split('\n\n').map(block => {
    if (block.startsWith('<') || block.trim() === '') return block;
    return `<p>${block.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n');
  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');

  return html;
};

const LearningPage = () => {
  const { categoryId, topicId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const category = categoryId ? getLearningCategory(categoryId) : learningCategories[0];
  const topic = topicId && category ? getLearningTopic(categoryId, topicId) : category?.topics?.[0];

  useEffect(() => {
    setActiveSection(0);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [categoryId, topicId]);

  if (!category) {
    return (
      <div className="not-found-page">
        <div>
          <div className="not-found-code text-gradient">404</div>
          <h1 className="not-found-title">학습 콘텐츠를 찾을 수 없습니다</h1>
          <Link to="/learn/basics" className="btn btn-primary">학습 시작하기</Link>
        </div>
      </div>
    );
  }

  const currentSection = topic?.sections?.[activeSection];

  return (
    <>
      <SEOHead
        title={topic ? `${topic.title} - ${category.title}` : category.title}
        description={category.description}
        path={`/learn/${categoryId || 'basics'}${topicId ? '/' + topicId : ''}`}
      />

      <div className="learning-page">
        {/* Sidebar */}
        <aside className={`learning-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="learning-sidebar-title">학습 목차</div>
          {learningCategories.map(cat => (
            <div key={cat.id} className="learning-sidebar-category">
              <Link
                to={`/learn/${cat.id}`}
                className={`learning-sidebar-cat-btn ${cat.id === (categoryId || 'basics') ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="learning-sidebar-cat-icon">{cat.icon}</span>
                {cat.title}
              </Link>
              {cat.id === (categoryId || 'basics') && (
                <div className="learning-sidebar-topics">
                  {cat.topics.map(t => (
                    <Link
                      key={t.id}
                      to={`/learn/${cat.id}/${t.id}`}
                      className={`learning-sidebar-topic ${t.id === (topicId || cat.topics[0]?.id) ? 'active' : ''}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {t.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="learning-content">
          <div className="learning-breadcrumb">
            <Link to="/">홈</Link>
            <span className="learning-breadcrumb-sep">›</span>
            <Link to={`/learn/${category.id}`}>{category.title}</Link>
            {topic && (
              <>
                <span className="learning-breadcrumb-sep">›</span>
                <span>{topic.title}</span>
              </>
            )}
          </div>

          <div className="learning-content-header">
            <div className="learning-content-icon">{category.icon}</div>
            <h1 className="learning-content-title">{topic?.title || category.title}</h1>
            <p className="learning-content-desc">{category.description}</p>
          </div>

          {/* Section Tabs */}
          {topic?.sections?.length > 1 && (
            <div className="learning-sections-nav">
              {topic.sections.map((sec, idx) => (
                <button
                  key={idx}
                  className={`learning-section-tab ${activeSection === idx ? 'active' : ''}`}
                  onClick={() => setActiveSection(idx)}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {currentSection && (
            <div
              className="learning-markdown"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(currentSection.content) }}
            />
          )}

          {/* Bottom Navigation */}
          <div className="learning-nav-bottom">
            {activeSection > 0 ? (
              <button className="btn btn-secondary" onClick={() => setActiveSection(activeSection - 1)}>
                ← {topic.sections[activeSection - 1]?.title}
              </button>
            ) : <div />}
            {topic?.sections && activeSection < topic.sections.length - 1 ? (
              <button className="btn btn-primary" onClick={() => { setActiveSection(activeSection + 1); window.scrollTo(0, 0); }}>
                {topic.sections[activeSection + 1]?.title} →
              </button>
            ) : (
              (() => {
                const catIdx = learningCategories.findIndex(c => c.id === category.id);
                const topicIdx = category.topics.findIndex(t => t.id === topic?.id);
                const nextTopic = category.topics[topicIdx + 1];
                const nextCat = learningCategories[catIdx + 1];
                if (nextTopic) {
                  return <Link to={`/learn/${category.id}/${nextTopic.id}`} className="btn btn-primary">다음: {nextTopic.title} →</Link>;
                } else if (nextCat) {
                  return <Link to={`/learn/${nextCat.id}`} className="btn btn-primary">다음: {nextCat.title} →</Link>;
                }
                return <Link to="/enrollment" className="btn btn-primary">과정 신청하기 →</Link>;
              })()
            )}
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button className="learning-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>
    </>
  );
};

export default LearningPage;
