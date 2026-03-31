import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import useAOS from '../../hooks/useAOS';
import { getToolById, toolsData } from '../../data/tools';
import { getGuideByToolId } from '../../data/tool-guides';
import renderMarkdown from '../../utils/renderMarkdown';

const sectionIcons = {
  intro: '📋',
  shortcuts: '⌨️',
  core: '🎯',
  advanced: '🚀',
  workflow: '📋',
  troubleshoot: '🔧',
};

const INTRO_SECTION = {
  id: 'intro',
  title: '도구 소개',
  subsections: [
    { title: '도구 개요' },
    { title: '요금제' },
    { title: '주요 기능 · 장단점' },
    { title: '추천 활용 분야' },
    { title: '활용 팁' },
  ],
};

/* ── Intro sub-section renderers ── */
const IntroContent = ({ tool, activeSubsection }) => {
  useAOS();

  switch (activeSubsection) {
    /* 0 — 도구 개요 */
    case 0:
      return (
        <div className="tool-intro-section">
          <div className="tool-detail-hero--embedded">
            <div className="tool-detail-grid">
              <div data-aos="fade-right">
                <div className={`tool-detail-icon ${tool.iconClass}`}>{tool.icon}</div>
                <h1 className="tool-detail-title">{tool.name}</h1>
                <p className="tool-detail-company">{tool.company}</p>
                <p className="tool-detail-desc">{tool.fullDescription}</p>
                <div className="tool-detail-tags">
                  {tool.tags.map((tag, i) => (
                    <span key={i} className="tool-detail-tag">{tag}</span>
                  ))}
                </div>
                <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-primary" style={{ display: 'inline-flex' }}>
                  공식 사이트 방문 →
                </a>
              </div>
              <div className="tool-detail-visual" data-aos="fade-left">
                <div className="tool-detail-visual-box">{tool.icon}</div>
              </div>
            </div>
          </div>
        </div>
      );

    /* 1 — 요금제 */
    case 1:
      return (
        <div className="tool-intro-section">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">요금제</h2>
            <p className="section-subtitle">{tool.shortName}의 다양한 요금제를 비교해 보세요</p>
          </div>
          <div className="pricing-grid">
            {tool.pricing.map((plan, idx) => (
              <div key={idx} className={`pricing-card ${plan.featured ? 'featured' : ''}`} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                <div className="pricing-name">{plan.plan}</div>
                <div className="pricing-price">{plan.price}</div>
                <div className="pricing-period">{plan.period || '일시불'}</div>
                <div className="pricing-features">
                  {plan.features.map((f, i) => (
                    <div key={i} className="pricing-feature">
                      <span className="pricing-feature-check">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}>
                  시작하기
                </a>
              </div>
            ))}
          </div>
        </div>
      );

    /* 2 — 주요 기능 · 장단점 */
    case 2:
      return (
        <div className="tool-intro-section">
          <div className="tool-info-grid">
            <div className="tool-info-card" data-aos="fade-up">
              <div className="tool-info-card-title">
                <span className="tool-info-card-icon">주요 기능</span>
              </div>
              <div className="tool-info-list">
                {tool.features.map((f, i) => (
                  <div key={i} className="tool-info-item">{f}</div>
                ))}
              </div>
            </div>
            <div className="tool-info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tool-info-card-title">
                <span className="tool-info-card-icon">장점</span>
              </div>
              <div className="tool-info-list">
                {tool.pros.map((p, i) => (
                  <div key={i} className="tool-info-item">{p}</div>
                ))}
              </div>
            </div>
            <div className="tool-info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tool-info-card-title">
                <span className="tool-info-card-icon">단점</span>
              </div>
              <div className="tool-info-list">
                {tool.cons.map((c, i) => (
                  <div key={i} className="tool-info-item" style={{ color: 'var(--text-light)' }}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    /* 3 — 추천 활용 분야 */
    case 3:
      return (
        <div className="tool-intro-section">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">추천 활용 분야</h2>
          </div>
          <div className="tool-usecase-grid" data-aos="fade-up">
            {tool.useCases.map((uc, i) => (
              <div key={i} className="card tool-usecase-card">
                <div className="tool-usecase-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="tool-usecase-label">{uc}</div>
              </div>
            ))}
          </div>
        </div>
      );

    /* 4 — 활용 팁 */
    case 4:
      return (
        <div className="tool-intro-section">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">활용 팁</h2>
            <p className="section-subtitle">{tool.shortName}를 더 잘 활용하기 위한 실전 팁</p>
          </div>
          <div style={{ padding: 0 }}>
            {tool.tips.map((tip, i) => (
              <div key={i} className="card tool-tip-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="icon-num-sm">{i + 1}</div>
                <p className="tool-tip-text">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ToolGuide = () => {
  const { toolId } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [activeSubsection, setActiveSubsection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(0);

  const tool = getToolById(toolId);
  const guide = getGuideByToolId(toolId);

  useEffect(() => {
    setActiveSection(0);
    setActiveSubsection(0);
    setSidebarOpen(false);
    setExpandedSection(0);
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

  const allSections = [INTRO_SECTION, ...guide.sections];
  const currentSection = allSections[activeSection];
  const currentSubsection = currentSection?.subsections?.[activeSubsection];

  const currentIdx = toolsData.findIndex(t => t.id === toolId);
  const prevTool = currentIdx > 0 ? toolsData[currentIdx - 1] : null;
  const nextTool = currentIdx < toolsData.length - 1 ? toolsData[currentIdx + 1] : null;

  const toggleSection = (sIdx) => {
    setExpandedSection(prev => prev === sIdx ? null : sIdx);
  };

  const handleSectionClick = (sIdx) => {
    setActiveSection(sIdx);
    setSidebarOpen(false);
    setExpandedSection(sIdx);
  };

  return (
    <>
      <SEOHead
        title={`${tool.name} 종합 사용 가이드`}
        description={`${tool.name}의 소개, 단축키, 핵심 기능, 고급 테크닉, 실전 워크플로우, 문제 해결까지 종합 가이드`}
        path={`/tools/${tool.id}`}
      />

      <div className="tool-guide-page">
        {/* Sidebar */}
        <aside className={`tool-guide-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="tool-guide-sidebar-header">
            <Link to="/tools" className="tool-guide-sidebar-back">
              ← 도구 목록으로 돌아가기
            </Link>
            <div className="tool-guide-sidebar-tool" style={{ marginTop: 12 }}>
              <div className="tool-guide-sidebar-icon" style={{ background: tool.gradient }}>
                {tool.icon}
              </div>
              <div className="tool-guide-sidebar-name">{tool.shortName} 가이드</div>
            </div>
          </div>

          <div className="tool-guide-sidebar-title">목차</div>
          {allSections.map((section, sIdx) => (
            <div key={section.id}>
              <div className={`tool-guide-sidebar-section ${activeSection === sIdx ? 'active' : ''}`}>
                <button
                  className="tool-guide-sidebar-section-btn"
                  onClick={() => handleSectionClick(sIdx)}
                >
                  <span className="tool-guide-sidebar-section-icon">
                    {sectionIcons[section.id] || '📖'}
                  </span>
                  {section.title}
                </button>
                {section.subsections && section.subsections.length > 0 && (
                  <button
                    className={`tool-guide-sidebar-toggle-arrow ${expandedSection === sIdx ? 'expanded' : ''}`}
                    onClick={() => toggleSection(sIdx)}
                    aria-label={expandedSection === sIdx ? '접기' : '펼치기'}
                  >
                    ▸
                  </button>
                )}
              </div>
              {expandedSection === sIdx && section.subsections && (
                <div className="tool-guide-sidebar-subs">
                  {section.subsections.map((sub, subIdx) => (
                    <button
                      key={subIdx}
                      className={`tool-guide-sidebar-sub ${activeSection === sIdx && activeSubsection === subIdx ? 'active' : ''}`}
                      onClick={() => {
                        setActiveSection(sIdx);
                        setActiveSubsection(subIdx);
                        setSidebarOpen(false);
                      }}
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
            <span>{tool.shortName} 가이드</span>
          </div>

          <div className="tool-guide-content-header">
            <div className="tool-guide-content-header-top">
              <div className="tool-guide-content-icon" style={{ background: tool.gradient }}>
                {tool.icon}
              </div>
              <h1 className="tool-guide-content-title">{tool.shortName} 종합 가이드</h1>
            </div>
            <p className="tool-guide-content-desc">
              {tool.shortName}의 소개부터 단축키, 핵심 기능, 고급 테크닉, 실전 워크플로우까지 — 완벽한 사용 가이드
            </p>
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
          {activeSection === 0 ? (
            <IntroContent tool={tool} activeSubsection={activeSubsection} />
          ) : (
            currentSubsection && (
              <div
                className="tool-guide-markdown"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(currentSubsection.content) }}
              />
            )
          )}

          {/* Bottom Navigation */}
          <div className="tool-guide-nav-bottom">
            {activeSubsection > 0 ? (
              <button className="btn btn-secondary" onClick={() => setActiveSubsection(activeSubsection - 1)}>
                ← {currentSection.subsections[activeSubsection - 1]?.title}
              </button>
            ) : activeSection > 0 ? (
              <button className="btn btn-secondary" onClick={() => {
                const prevSection = allSections[activeSection - 1];
                setActiveSection(activeSection - 1);
                setActiveSubsection(prevSection.subsections ? prevSection.subsections.length - 1 : 0);
              }}>
                ← {allSections[activeSection - 1]?.title}
              </button>
            ) : <div />}

            {currentSection?.subsections && activeSubsection < currentSection.subsections.length - 1 ? (
              <button className="btn btn-primary" onClick={() => { setActiveSubsection(activeSubsection + 1); window.scrollTo(0, 0); }}>
                {currentSection.subsections[activeSubsection + 1]?.title} →
              </button>
            ) : activeSection < allSections.length - 1 ? (
              <button className="btn btn-primary" onClick={() => { setActiveSection(activeSection + 1); window.scrollTo(0, 0); }}>
                {allSections[activeSection + 1]?.title} →
              </button>
            ) : <div />}
          </div>

          {/* Prev/Next Tool Navigation */}
          <div className="tool-guide-tool-nav">
            {prevTool ? (
              <Link to={`/tools/${prevTool.id}`} className="btn btn-secondary">
                ← {prevTool.shortName}
              </Link>
            ) : <div />}
            <Link to="/tools" className="btn btn-dark">전체 비교하기</Link>
            {nextTool ? (
              <Link to={`/tools/${nextTool.id}`} className="btn btn-primary">
                {nextTool.shortName} →
              </Link>
            ) : <div />}
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
