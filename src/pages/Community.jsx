import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const Community = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="커뮤니티"
        description="프레젠테이션 커뮤니티 - 발표 노하우를 공유하고 함께 성장하세요"
        path="/community"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">커뮤니티</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            프레젠테이션 노하우를 공유하고 함께 성장하는 공간입니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">준비 중입니다</h2>
            <p className="section-subtitle">
              커뮤니티 기능을 준비하고 있습니다. 곧 만나보실 수 있습니다.
            </p>
          </div>
          <div className="grid grid-3" data-aos="fade-up">
            <div className="card">
              <div className="icon-num-sm">Q</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>Q&A</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                프레젠테이션 관련 질문과 답변을 주고받을 수 있습니다.
              </p>
            </div>
            <div className="card">
              <div className="icon-num-sm">S</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>자료 공유</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                유용한 템플릿, 디자인 리소스를 공유하세요.
              </p>
            </div>
            <div className="card">
              <div className="icon-num-sm">R</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, margin: '16px 0 8px' }}>피드백</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                발표 자료에 대한 피드백을 받고 개선하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
