import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { getToolById } from '../../data/tools';
import { getGuideByToolId } from '../../data/tool-guides';
import renderMarkdown from '../../utils/renderMarkdown';

const sectionIcons = {
  shortcuts: '⌨️',
  core: '🎯',
  advanced: '🚀',
  workflow: '📋',
  troubleshoot: '🔧',
};

const ToolGuide = () => {
  const { toolId } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [activeSubsection, setActiveSubsection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tool = getToolById(toolId);
  const guide = getGuideByToolId(toolId);

  useEffect(() => {
    setActiveSection(0);
    setActiveSubsection(0);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [toolId]);

  useEffect(() => {
    setActiveSubsection(0);
    window.scrollTo(0, 0);
  }, [activeSection]);

  if (!tool || !guide) {
    return (
      <div className="not-found-page">
        <div>
          <div className="not-found-code text-gradient">404</div>
          <h1 className="not-found-title">가이드를 찾을 수 없습니다</h1>
          <Link to="/tools" className="btn btn-primary">도구 목록으로</Link>
        </div>
      </div>
    );
  }

  const currentSection = guide.sections[activeSection];
  const currentSubsection = currentSection?.subsections?.[activeSubsection];

  return (
    <>
      <SEOHead
        title={`${tool.name} 종합 사용 가이드`}
        description={`${tool.name}의 단축키, 핵심 기능, 고급 테크닉, 실전 워크플로우, 문제 해결까지 종합 가이드`}
        path={`/tools/${tool.id}/guide`}
      />

      <div className="tool-guide-page">
        {/* Sidebar */}
        <aside className={`tool-guide-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="tool-guide-sidebar-header">
            <Link to={`/tools/${tool.id}`} className="tool-guide-sidebar-back">
              ← {tool.shortName} 소개로 돌아가기
            </Link>
            <div className="tool-guide-sidebar-tool" style={{ marginTop: 12 }}>
              <div className="tool-guide-sidebar-icon" style={{ background: tool.gradient }}>
                {tool.icon}
              </div>
              <div className="tool-guide-sidebar-name">{tool.shortName} 가이드</div>
            </div>
          </div>

          <div className="tool-guide-sidebar-title">목차</div>
          {guide.sections.map((section, sIdx) => (
            <div key={section.id}>
              <button
                className={`tool-guide-sidebar-section ${activeSection === sIdx ? 'active' : ''}`}
                onClick={() => { setActiveSection(sIdx); setSidebarOpen(false); }}
              >
                <span className="tool-guide-sidebar-section-icon">
                  {sectionIcons[section.id] || '📖'}
                </span>
                {section.title}
              </button>
              {activeSection === sIdx && section.subsections && (
                <div className="tool-guide-sidebar-subs">
                  {section.subsections.map((sub, subIdx) => (
                    <button
                      key={subIdx}
                      className={`tool-guide-sidebar-sub ${activeSubsection === subIdx ? 'active' : ''}`}
                      onClick={() => { setActiveSubsection(subIdx); setSidebarOpen(false); }}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="tool-guide-content">
          <div className="tool-guide-breadcrumb">
            <Link to="/">홈</Link>
            <span className="tool-guide-breadcrumb-sep">›</span>
            <Link to="/tools">제작도구</Link>
            <span className="tool-guide-breadcrumb-sep">›</span>
            <Link to={`/tools/${tool.id}`}>{tool.shortName}</Link>
            <span className="tool-guide-breadcrumb-sep">›</span>
            <span>종합 가이드</span>
          </div>

          <div className="tool-guide-content-header">
            <div className="tool-guide-content-header-top">
              <div className="tool-guide-content-icon" style={{ background: tool.gradient }}>
                {tool.icon}
              </div>
              <h1 className="tool-guide-content-title">{tool.shortName} 종합 가이드</h1>
            </div>
            <p className="tool-guide-content-desc">
              {tool.shortName}의 단축키부터 고급 테크닉, 실전 워크플로우까지 — 완벽한 사용 가이드
            </p>
          </div>

          {/* Section Tabs */}
          <div className="tool-guide-sections-nav">
            {guide.sections.map((section, idx) => (
              <button
                key={section.id}
                className={`tool-guide-section-tab ${activeSection === idx ? 'active' : ''}`}
                onClick={() => setActiveSection(idx)}
              >
                {sectionIcons[section.id] || '📖'} {section.title}
              </button>
            ))}
          </div>

          {/* Subsection Tabs */}
          {currentSection?.subsections?.length > 1 && (
            <div className="tool-guide-subsections-nav">
              {currentSection.subsections.map((sub, idx) => (
                <button
                  key={idx}
                  className={`tool-guide-subsection-tab ${activeSubsection === idx ? 'active' : ''}`}
                  onClick={() => setActiveSubsection(idx)}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {currentSubsection && (
            <div
              className="tool-guide-markdown"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(currentSubsection.content) }}
            />
          )}

          {/* Bottom Navigation */}
          <div className="tool-guide-nav-bottom">
            {activeSubsection > 0 ? (
              <button className="btn btn-secondary" onClick={() => setActiveSubsection(activeSubsection - 1)}>
                ← {currentSection.subsections[activeSubsection - 1]?.title}
              </button>
            ) : activeSection > 0 ? (
              <button className="btn btn-secondary" onClick={() => {
                const prevSection = guide.sections[activeSection - 1];
                setActiveSection(activeSection - 1);
                setActiveSubsection(prevSection.subsections.length - 1);
              }}>
                ← {guide.sections[activeSection - 1]?.title}
              </button>
            ) : <div />}

            {currentSection?.subsections && activeSubsection < currentSection.subsections.length - 1 ? (
              <button className="btn btn-primary" onClick={() => { setActiveSubsection(activeSubsection + 1); window.scrollTo(0, 0); }}>
                {currentSection.subsections[activeSubsection + 1]?.title} →
              </button>
            ) : activeSection < guide.sections.length - 1 ? (
              <button className="btn btn-primary" onClick={() => { setActiveSection(activeSection + 1); window.scrollTo(0, 0); }}>
                {guide.sections[activeSection + 1]?.title} →
              </button>
            ) : (
              <Link to={`/tools/${tool.id}`} className="btn btn-primary">
                {tool.shortName} 소개 페이지 →
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button className="tool-guide-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>
    </>
  );
};

export default ToolGuide;
