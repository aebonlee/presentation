import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const About = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="프로그램 소개"
        description="DreamIT 프레젠테이션 입문 프로그램 소개 - 효과적인 발표 기법과 시각 자료 제작 능력을 학습합니다."
        path="/about"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">프레젠테이션 입문</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            효과적인 발표 기법과 시각 자료 제작 능력을 학습합니다.
            기획부터 실전 발표까지, 체계적인 커리큘럼으로 프레젠테이션 전문가를 양성합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">프로그램 특징</h2>
            <p className="section-subtitle">DreamIT Biz의 프레젠테이션 교육은 이렇게 다릅니다</p>
          </div>
          <div className="about-grid">
            <div className="about-card" data-aos="fade-up">
              <div className="about-card-icon icon-num-sm">01</div>
              <h3 className="about-card-title">체계적인 커리큘럼</h3>
              <p className="about-card-desc">
                기획과 구성, PPT 디자인, 스피치, 데이터 시각화, 실전 연습까지
                5단계로 구성된 체계적인 학습 과정입니다. 각 단계마다 이론과 실습이 균형 있게 배치되어 있습니다.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="100">
              <div className="about-card-icon icon-num-sm">02</div>
              <h3 className="about-card-title">다양한 도구 학습</h3>
              <p className="about-card-desc">
                파워포인트, 구글 슬라이드, 캔바, 미리캔버스, 피그마, 젠리 등
                6가지 주요 프레젠테이션 도구의 사용법과 비용, 장단점을 비교 학습합니다.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="200">
              <div className="about-card-icon icon-num-sm">03</div>
              <h3 className="about-card-title">영상 피드백</h3>
              <p className="about-card-desc">
                발표 영상을 촬영하고 전문가의 상세한 피드백을 받습니다.
                음성, 제스처, 시선, 슬라이드 활용 등 다각적 관점에서 개선점을 찾아 드립니다.
              </p>
            </div>
            <div className="about-card" data-aos="fade-up" data-aos-delay="300">
              <div className="about-card-icon icon-num-sm">04</div>
              <h3 className="about-card-title">실전 시뮬레이션</h3>
              <p className="about-card-desc">
                실제 발표 환경을 재현한 시뮬레이션으로 실전 감각을 키웁니다.
                비즈니스 발표, 학술 발표, 세일즈 피치 등 다양한 상황을 경험할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="section-title">학습 로드맵</h2>
            <p className="section-subtitle">총 18주 과정으로 프레젠테이션의 A to Z를 마스터합니다</p>
          </div>
          <div className="container-content" style={{ padding: 0 }}>
            {[
              { week: '1~4주', title: '기획과 구성', desc: '목적 설정, 청중 분석, 스토리보드 구성', num: '01' },
              { week: '5~8주', title: 'PPT 디자인 원칙', desc: '레이아웃, 색상, 타이포그래피, 시각 요소', num: '02' },
              { week: '9~12주', title: '스피치와 전달력', desc: '발성, 제스처, 시선, 긴장감 극복', num: '03' },
              { week: '13~15주', title: '데이터 시각화', desc: '차트, 인포그래픽, 대시보드, 스토리텔링', num: '04' },
              { week: '16~18주', title: '실전 발표 연습', desc: '시뮬레이션, 피드백, 포트폴리오, 수료', num: '05' },
            ].map((item, i) => (
              <div
                key={i}
                className="card roadmap-card"
                data-aos="fade-right"
                data-aos-delay={`${i * 100}`}
              >
                <div className="icon-num">{item.num}</div>
                <div className="roadmap-card-body">
                  <div className="roadmap-week">{item.week}</div>
                  <div className="roadmap-title">{item.title}</div>
                  <div className="roadmap-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">프레젠테이션 역량을 키워보세요</h2>
            <p className="cta-desc">
              DreamIT Biz의 체계적인 교육 프로그램으로 시작하세요.
            </p>
            <div className="flex-center-wrap">
              <Link to="/curriculum/planning" className="hero-btn-primary">학습 시작하기 →</Link>
              <a href="https://www.dreamitbiz.com/contact" target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
