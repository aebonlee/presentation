import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const Request = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="제작 의뢰"
        description="프레젠테이션 제작 의뢰 - 전문가가 직접 제작하는 고품질 발표 자료"
        path="/request"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">제작 의뢰</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            전문가가 직접 제작하는 고품질 프레젠테이션 자료를 의뢰하세요.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">의뢰 프로세스</h2>
            <p className="section-subtitle">간단한 3단계로 제작을 의뢰할 수 있습니다</p>
          </div>
          <div className="grid grid-3" data-aos="fade-up">
            <div className="card">
              <div className="icon-num-sm">1</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>요구사항 작성</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                발표 주제, 슬라이드 수, 디자인 스타일, 납기일 등을 알려주세요.
              </p>
            </div>
            <div className="card">
              <div className="icon-num-sm">2</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>견적 및 확인</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                요구사항 검토 후 견적과 일정을 안내해 드립니다.
              </p>
            </div>
            <div className="card">
              <div className="icon-num-sm">3</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>제작 및 납품</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                전문 디자이너가 제작하여 기한 내 납품합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">제작 의뢰 문의</h2>
            <p className="cta-desc">
              프레젠테이션 제작이 필요하시면 아래로 문의해 주세요.
            </p>
            <a href="mailto:contact@dreamitbiz.com" className="hero-btn-primary">
              문의하기 →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
