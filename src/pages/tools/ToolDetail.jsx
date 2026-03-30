import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import useAOS from '../../hooks/useAOS';
import { getToolById, toolsData } from '../../data/tools';

const ToolDetail = () => {
  useAOS();
  const { toolId } = useParams();
  const tool = getToolById(toolId);

  if (!tool) {
    return (
      <div className="not-found-page">
        <div>
          <div className="not-found-code text-gradient">404</div>
          <h1 className="not-found-title">도구를 찾을 수 없습니다</h1>
          <Link to="/tools" className="btn btn-primary">도구 목록으로</Link>
        </div>
      </div>
    );
  }

  const currentIdx = toolsData.findIndex(t => t.id === toolId);
  const prevTool = currentIdx > 0 ? toolsData[currentIdx - 1] : null;
  const nextTool = currentIdx < toolsData.length - 1 ? toolsData[currentIdx + 1] : null;

  return (
    <>
      <SEOHead
        title={`${tool.name} 사용법과 가격`}
        description={`${tool.name} - ${tool.description} 가격, 기능, 장단점, 사용 팁을 상세히 알아봅니다.`}
        path={`/tools/${tool.id}`}
      />

      {/* Hero */}
      <section className="tool-detail-hero">
        <div className="container">
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
              <div className="tool-detail-visual-box">
                {tool.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
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
      </section>

      {/* Features, Pros, Cons */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
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
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">추천 활용 분야</h2>
          </div>
          <div className="tool-usecase-grid" data-aos="fade-up">
            {tool.useCases.map((uc, i) => (
              <div key={i} className="card tool-usecase-card">
                <div className="tool-usecase-num">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="tool-usecase-label">{uc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">활용 팁</h2>
            <p className="section-subtitle">{tool.shortName}를 더 잘 활용하기 위한 실전 팁</p>
          </div>
          <div className="container-content" style={{ padding: 0 }}>
            {tool.tips.map((tip, i) => (
              <div key={i} className="card tool-tip-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="icon-num-sm">
                  {i + 1}
                </div>
                <p className="tool-tip-text">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section">
        <div className="container">
          <div className="flex-center-wrap" style={{ justifyContent: 'space-between' }}>
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
      </section>
    </>
  );
};

export default ToolDetail;
