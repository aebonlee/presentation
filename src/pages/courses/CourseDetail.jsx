import { useParams, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import useAOS from '../../hooks/useAOS';
import { getCurriculumBySlug, curriculumData } from '../../data/curriculum';

const CourseDetail = () => {
  useAOS();
  const { slug } = useParams();
  const course = getCurriculumBySlug(slug);

  if (!course) {
    return (
      <div className="not-found-page">
        <div>
          <div className="not-found-code text-gradient">404</div>
          <h1 className="not-found-title">과정을 찾을 수 없습니다</h1>
          <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const currentIdx = curriculumData.findIndex(c => c.slug === slug);
  const prevCourse = currentIdx > 0 ? curriculumData[currentIdx - 1] : null;
  const nextCourse = currentIdx < curriculumData.length - 1 ? curriculumData[currentIdx + 1] : null;

  return (
    <>
      <SEOHead
        title={course.title}
        description={course.description}
        path={`/curriculum/${course.slug}`}
      />

      {/* Hero */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-inner">
            <div data-aos="fade-right">
              <span className="course-hero-badge">
                커리큘럼 {course.id}/5
              </span>
              <h1 className="course-hero-title">{course.title}</h1>
              <p className="course-hero-desc">{course.description}</p>
              <div className="course-hero-meta">
                <div className="course-meta-item">
                  <span>기간:</span> {course.duration}
                </div>
                <div className="course-meta-item">
                  <span>난이도:</span> {course.level}
                </div>
                <div className="course-meta-item">
                  <span>모듈:</span> {course.modules.length}개
                </div>
              </div>
            </div>
            <div className="course-hero-visual" data-aos="fade-left">
              <div className="course-icon-large">{course.icon}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="course-content">
            <div className="course-main">
              <h2 data-aos="fade-up">학습 개요</h2>
              <p data-aos="fade-up">
                {course.description} 이 과정에서는 {course.modules.length}개의 모듈을 통해
                단계별로 학습하며, 각 모듈은 이론 학습과 실습으로 구성되어 있습니다.
              </p>

              <h2 data-aos="fade-up">학습 모듈</h2>
              {course.modules.map((module, idx) => (
                <div key={idx} className="course-module" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                  <div className="course-module-header">
                    <div className="course-module-num">{idx + 1}</div>
                    <div className="course-module-title">{module.title}</div>
                  </div>
                  <div className="course-module-topics">
                    {module.topics.map((topic, i) => (
                      <div key={i} className="course-module-topic">{topic}</div>
                    ))}
                  </div>
                </div>
              ))}

              <h2 data-aos="fade-up">주요 학습 키워드</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }} data-aos="fade-up">
                {course.topics.map((topic, i) => (
                  <span key={i} className="badge badge-primary" style={{ fontSize: 'var(--font-size-sm)', padding: '6px 16px' }}>
                    {topic}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex-center-wrap" style={{ justifyContent: 'space-between', marginTop: 48 }}>
                {prevCourse ? (
                  <Link to={`/curriculum/${prevCourse.slug}`} className="btn btn-secondary">
                    ← {prevCourse.shortTitle}
                  </Link>
                ) : <div />}
                {nextCourse ? (
                  <Link to={`/curriculum/${nextCourse.slug}`} className="btn btn-primary">
                    {nextCourse.shortTitle} →
                  </Link>
                ) : (
                  <Link to="/tools" className="btn btn-primary">
                    도구 학습 시작하기 →
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="course-sidebar">
              <div className="course-sidebar-card" data-aos="fade-left">
                <div className="course-sidebar-title">과정 정보</div>
                <div className="course-sidebar-list">
                  <div className="course-sidebar-item">
                    <span className="course-sidebar-icon">기간:</span>
                    {course.duration}
                  </div>
                  <div className="course-sidebar-item">
                    <span className="course-sidebar-icon">난이도:</span>
                    {course.level}
                  </div>
                  <div className="course-sidebar-item">
                    <span className="course-sidebar-icon">모듈:</span>
                    {course.modules.length}개
                  </div>
                  <div className="course-sidebar-item">
                    <span className="course-sidebar-icon">토픽:</span>
                    {course.modules.reduce((acc, m) => acc + m.topics.length, 0)}개
                  </div>
                </div>
              </div>

              <div className="course-sidebar-card" data-aos="fade-left" data-aos-delay="100">
                <div className="course-sidebar-title">학습 특징</div>
                <div className="course-sidebar-list">
                  {course.features.map((feature, i) => (
                    <div key={i} className="course-sidebar-item">
                      <span className="course-sidebar-icon">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-sidebar-card" data-aos="fade-left" data-aos-delay="200">
                <div className="course-sidebar-title">전체 커리큘럼</div>
                <div className="course-sidebar-list">
                  {curriculumData.map(c => (
                    <Link
                      key={c.slug}
                      to={`/curriculum/${c.slug}`}
                      className="course-sidebar-item"
                      style={{
                        color: c.slug === slug ? 'var(--accent)' : 'var(--text-secondary)',
                        fontWeight: c.slug === slug ? 600 : 400,
                        textDecoration: 'none'
                      }}
                    >
                      <span className="course-sidebar-icon">{c.icon}.</span>
                      {c.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
