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
      <section className="tool-detail-hero" style={{ background: tool.gradient }}>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} data-aos="fade-left">
              <div style={{
                width: 200, height: 200,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 80, backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
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
                <span className="tool-info-card-icon">⚡</span> 주요 기능
              </div>
              <div className="tool-info-list">
                {tool.features.map((f, i) => (
                  <div key={i} className="tool-info-item">{f}</div>
                ))}
              </div>
            </div>
            <div className="tool-info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tool-info-card-title">
                <span className="tool-info-card-icon">👍</span> 장점
              </div>
              <div className="tool-info-list">
                {tool.pros.map((p, i) => (
                  <div key={i} className="tool-info-item">{p}</div>
                ))}
              </div>
            </div>
            <div className="tool-info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tool-info-card-title">
                <span className="tool-info-card-icon">⚠️</span> 단점
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
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }} data-aos="fade-up">
            {tool.useCases.map((uc, i) => (
              <div key={i} className="card" style={{ flex: '1 1 200px', maxWidth: 280, textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>
                  {['💼', '🎓', '📈', '🎨'][i % 4]}
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{uc}</div>
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
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {tool.tips.map((tip, i) => (
              <div key={i} className="card" data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ marginBottom: 12, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 'var(--font-size-sm)', flexShrink: 0
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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
          <div style={{ display: 'flex', gap: 16, justifyContent: 'space-between', flexWrap: 'wrap' }}>
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
