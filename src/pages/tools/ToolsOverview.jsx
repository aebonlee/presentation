import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import useAOS from '../../hooks/useAOS';
import { toolsData, toolComparison } from '../../data/tools';

const ToolsOverview = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="프레젠테이션 도구 비교"
        description="PowerPoint, Google Slides, Canva, 미리캔버스, Figma, Genially - 6가지 프레젠테이션 도구의 기능, 가격, 장단점을 비교합니다."
        path="/tools"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">프레젠테이션 도구 비교</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            6가지 주요 프레젠테이션 도구의 기능, 가격, 장단점을 비교하고
            나에게 가장 적합한 도구를 찾아보세요.
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">도구별 상세 정보</h2>
            <p className="section-subtitle">각 도구를 클릭하면 상세 정보, 가격, 사용 팁을 확인할 수 있습니다</p>
          </div>
          <div className="tools-grid">
            {toolsData.map((tool, idx) => (
              <Link
                to={`/tools/${tool.id}`}
                key={tool.id}
                className="tool-card"
                data-aos="fade-up"
                data-aos-delay={`${(idx % 3) * 100}`}
              >
                <div className="tool-card-header">
                  <div className={`tool-icon ${tool.iconClass}`}>{tool.icon}</div>
                  <div>
                    <div className="tool-card-name">{tool.shortName}</div>
                    <div className="tool-card-company">{tool.company}</div>
                  </div>
                </div>
                <p className="tool-card-desc">{tool.description}</p>
                <div className="tool-card-footer">
                  <span className={`tool-price ${tool.pricing[0].price === '₩0' ? 'tool-price-free' : 'tool-price-paid'}`}>
                    {tool.pricing[0].price === '₩0' ? '무료 사용 가능' : tool.pricing[0].price + '~'}
                  </span>
                  <div className="tool-arrow">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">도구 비교표</h2>
            <p className="section-subtitle">한눈에 보는 6가지 도구의 주요 기능 비교</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  {toolComparison.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {toolComparison.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">상황별 추천 도구</h2>
            <p className="section-subtitle">어떤 상황에서 어떤 도구를 선택할지 알아보세요</p>
          </div>
          <div className="grid grid-3" data-aos="fade-up">
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                비즈니스 · 기업
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                호환성과 기능이 가장 중요한 비즈니스 환경
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/powerpoint" className="badge badge-primary">PowerPoint 추천</Link>
                <Link to="/tools/google-slides" className="badge badge-primary">Google Slides</Link>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                학생 · 교육
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                무료이면서 쉽게 사용할 수 있는 도구
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/canva" className="badge badge-primary">Canva 추천</Link>
                <Link to="/tools/google-slides" className="badge badge-primary">Google Slides</Link>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                한국어 · 한국형
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                한글 폰트와 한국형 템플릿이 필요한 경우
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/miricanvas" className="badge badge-primary">미리캔버스 추천</Link>
                <Link to="/tools/powerpoint" className="badge badge-primary">PowerPoint</Link>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                디자인 · 포트폴리오
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                고급 디자인과 자유도가 필요한 경우
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/figma" className="badge badge-primary">Figma 추천</Link>
                <Link to="/tools/canva" className="badge badge-primary">Canva</Link>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                인터랙티브 · 교육
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                클릭, 호버 등 인터랙션이 필요한 교육 콘텐츠
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/genially" className="badge badge-primary">Genially 추천</Link>
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                스타트업 · 피치덱
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>
                투자자에게 임팩트 있는 발표를 해야 하는 경우
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link to="/tools/figma" className="badge badge-primary">Figma 추천</Link>
                <Link to="/tools/canva" className="badge badge-primary">Canva</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">도구 사용법을 배워보세요</h2>
            <p className="cta-desc">
              커리큘럼에서 각 도구의 실전 활용법을 체계적으로 학습할 수 있습니다.
            </p>
            <Link to="/curriculum/ppt-design" className="hero-btn-primary">PPT 디자인 학습 →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsOverview;
