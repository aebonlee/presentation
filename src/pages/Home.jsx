import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import { curriculumData } from '../data/curriculum';
import { toolsData } from '../data/tools';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: Math.random() * 10 + 15,
}));

const Home = () => {
  useAOS();

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-particles">
          {particles.map(p => (
            <div
              key={p.id}
              className="hero-particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            🎯 DreamIT Biz 교육 프로그램
          </div>
          <h1 className="hero-title">
            프레젠테이션의 모든 것<br />
            <span className="hero-title-accent">기획부터 실전까지</span>
          </h1>
          <p className="hero-description">
            PPT 디자인, 스피치, 시각디자인, 스토리텔링을 학습하고
            미리캔버스, 캔바, 파워포인트, 구글 슬라이드, 피그마 등
            다양한 도구의 활용법을 마스터하세요.
          </p>
          <div className="hero-actions">
            <Link to="/curriculum/planning" className="hero-btn-primary">
              학습 시작하기 →
            </Link>
            <Link to="/tools" className="hero-btn-secondary">
              도구 비교하기
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">5</div>
              <div className="hero-stat-label">커리큘럼 모듈</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">6</div>
              <div className="hero-stat-label">프레젠테이션 도구</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">20+</div>
              <div className="hero-stat-label">실습 프로젝트</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">실전 중심</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-mouse" />
          <span>스크롤</span>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section curriculum-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">커리큘럼</h2>
            <p className="section-subtitle">
              체계적인 5단계 학습 과정으로 프레젠테이션 전문가로 성장하세요
            </p>
          </div>
          <div className="curriculum-grid">
            {curriculumData.map((item, idx) => (
              <Link
                to={`/curriculum/${item.slug}`}
                key={item.id}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={`${(idx % 3) * 100}`}
              >
                <div className="curriculum-number">{item.id}</div>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.description}</p>
                <div className="curriculum-topics">
                  {item.topics.map((topic, i) => (
                    <span key={i} className="curriculum-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">프레젠테이션 도구</h2>
            <p className="section-subtitle">
              각 도구의 특징과 비용을 비교하고 나에게 맞는 도구를 찾아보세요
            </p>
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
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/tools" className="btn btn-secondary">전체 도구 비교하기 →</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">학습 특징</h2>
            <p className="section-subtitle">
              실전 중심의 학습 프로그램으로 발표 능력을 확실하게 향상시킵니다
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon">
                <span className="feature-icon-emoji">📑</span>
              </div>
              <h3 className="feature-title">템플릿 제공</h3>
              <p className="feature-desc">
                다양한 목적과 상황에 맞는 프레젠테이션 템플릿을 제공합니다.
                비즈니스, 교육, 마케팅 등 분야별 전문 템플릿으로 빠르게 시작하세요.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <span className="feature-icon-emoji">🎥</span>
              </div>
              <h3 className="feature-title">영상 피드백</h3>
              <p className="feature-desc">
                발표 영상을 촬영하고 전문가의 피드백을 받으세요.
                목소리, 제스처, 시선 처리 등 세밀한 포인트까지 개선합니다.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <span className="feature-icon-emoji">🎯</span>
              </div>
              <h3 className="feature-title">실전 시뮬레이션</h3>
              <p className="feature-desc">
                실제 발표 환경을 재현한 시뮬레이션으로 실전 감각을 키웁니다.
                피어 리뷰와 함께 종합적인 발표 역량을 강화하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section audience-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">이런 분들에게 추천합니다</h2>
            <p className="section-subtitle">
              발표 능력 향상을 원하는 모든 학습자를 위한 프로그램입니다
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-card" data-aos="fade-up">
              <div className="audience-icon">🎓</div>
              <h3 className="audience-title">대학생 · 취준생</h3>
              <p className="audience-desc">
                발표 수업, 팀 프로젝트, 면접에서 인상적인 프레젠테이션으로 차별화하세요.
              </p>
            </div>
            <div className="audience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="audience-icon">💼</div>
              <h3 className="audience-title">직장인 · 비즈니스</h3>
              <p className="audience-desc">
                회의, 보고, 제안서 발표에서 설득력 있는 프레젠테이션 스킬을 익히세요.
              </p>
            </div>
            <div className="audience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="audience-icon">📚</div>
              <h3 className="audience-title">교육자 · 강사</h3>
              <p className="audience-desc">
                학생들의 집중력을 높이는 교육 자료와 강의 기법을 학습하세요.
              </p>
            </div>
            <div className="audience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="audience-icon">🚀</div>
              <h3 className="audience-title">창업자 · 스타트업</h3>
              <p className="audience-desc">
                투자자 피칭, 사업 제안, 데모데이 발표를 성공적으로 준비하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">지금 바로 시작하세요</h2>
            <p className="cta-desc">
              체계적인 커리큘럼과 실전 중심의 학습으로
              프레젠테이션 전문가로 거듭나세요.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/curriculum/planning" className="hero-btn-primary">무료로 시작하기</Link>
              <Link to="/about" className="hero-btn-secondary">자세히 알아보기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
