import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import { learningCategories } from '../data/learning';
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
            🎯 DreamIT Biz 프레젠테이션 학습
          </div>
          <h1 className="hero-title">
            프레젠테이션의 모든 것<br />
            <span className="hero-title-accent">기획부터 실전까지 배우기</span>
          </h1>
          <p className="hero-description">
            슬라이드 디자인, 스피치, 데이터 시각화, 스토리텔링, 영어 프레젠테이션까지
            체계적인 학습 콘텐츠로 발표 능력을 완성하세요.
          </p>
          <div className="hero-actions">
            <Link to="/learn/basics" className="hero-btn-primary">
              학습 시작하기 →
            </Link>
            <Link to="/enrollment" className="hero-btn-secondary">
              과정 신청하기
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">6</div>
              <div className="hero-stat-label">학습 카테고리</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">11+</div>
              <div className="hero-stat-label">학습 토픽</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">6</div>
              <div className="hero-stat-label">프레젠테이션 도구</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">무료 학습</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-mouse" />
          <span>스크롤</span>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="section curriculum-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">학습 콘텐츠</h2>
            <p className="section-subtitle">
              프레젠테이션에 필요한 모든 지식을 체계적으로 학습하세요
            </p>
          </div>
          <div className="curriculum-grid">
            {learningCategories.map((cat, idx) => (
              <Link
                to={`/learn/${cat.id}`}
                key={cat.id}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={`${(idx % 3) * 100}`}
              >
                <div className="curriculum-number">{cat.icon}</div>
                <h3 className="curriculum-card-title">{cat.title}</h3>
                <p className="curriculum-card-desc">{cat.description}</p>
                <div className="curriculum-topics">
                  {cat.topics.map((topic) => (
                    <span key={topic.id} className="curriculum-topic">{topic.title}</span>
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
              실전 중심의 학습 콘텐츠로 발표 능력을 확실하게 향상시킵니다
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon">
                <span className="feature-icon-emoji">📖</span>
              </div>
              <h3 className="feature-title">체계적 학습 콘텐츠</h3>
              <p className="feature-desc">
                기초부터 고급까지, 프레젠테이션의 모든 영역을 단계별로 학습합니다.
                강의안 형태의 실전 노하우를 무료로 제공합니다.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <span className="feature-icon-emoji">🌍</span>
              </div>
              <h3 className="feature-title">영어 프레젠테이션</h3>
              <p className="feature-desc">
                글로벌 비즈니스에 필요한 영어 발표 표현과 노하우를 학습합니다.
                오프닝, 전환, 클로징까지 실전 표현을 익히세요.
              </p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <span className="feature-icon-emoji">🎯</span>
              </div>
              <h3 className="feature-title">퀴즈와 용어사전</h3>
              <p className="feature-desc">
                학습한 내용을 퀴즈로 복습하고, 프레젠테이션 전문 용어사전으로
                핵심 개념을 빠르게 찾아보세요.
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
            <h2 className="cta-title">지금 바로 학습을 시작하세요</h2>
            <p className="cta-desc">
              프레젠테이션 기초부터 영어 발표까지,
              체계적인 학습 콘텐츠가 무료로 준비되어 있습니다.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/learn/basics" className="hero-btn-primary">무료 학습 시작하기</Link>
              <Link to="/enrollment" className="hero-btn-secondary">과정 신청하기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
