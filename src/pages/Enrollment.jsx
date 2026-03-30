import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import useAOS from "../hooks/useAOS";
import { curriculumData } from "../data/curriculum";

export default function Enrollment() {
  useAOS();

  const [expandedModules, setExpandedModules] = useState({});

  const toggleModules = (courseId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const levelLabels = {
    입문: "입문",
    초급: "초급",
    중급: "중급",
    고급: "고급",
  };

  return (
    <>
      <SEOHead
        title="과정 신청 | 프레젠테이션"
        description="프레젠테이션 역량 강화를 위한 과정을 신청하세요. 기획, 디자인, 스피치, 데이터 시각화, 실전 연습까지 체계적인 커리큘럼을 제공합니다."
      />

      {/* Hero Header */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">과정 신청</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            체계적인 커리큘럼으로 프레젠테이션 역량을 한 단계 끌어올리세요.
            원하는 과정을 선택하고 지금 바로 신청하세요.
          </p>
        </div>
      </section>

      {/* Enrollment Cards */}
      <section className="enrollment-section">
        <div className="container">
          {curriculumData.map((course, index) => (
            <div
              className="enrollment-card"
              key={course.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="enrollment-card-header">
                <div className="enrollment-card-icon">{course.icon}</div>
                <div className="enrollment-card-info">
                  <h2 className="enrollment-card-title">{course.title}</h2>
                  <div className="enrollment-card-meta">
                    <span>{levelLabels[course.level] || course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              <p className="enrollment-card-desc">{course.description}</p>

              {/* Module List (collapsible) */}
              {course.modules && course.modules.length > 0 && (
                <div className="enrollment-card-modules">
                  <button
                    className="enrollment-card-module-toggle"
                    onClick={() => toggleModules(course.id)}
                  >
                    <span className={`toggle-arrow${expandedModules[course.id] ? ' open' : ''}`}>
                      ▶
                    </span>
                    커리큘럼 보기 ({course.modules.length}개 모듈)
                  </button>
                  {expandedModules[course.id] && (
                    <ul className="enrollment-module-list">
                      {course.modules.map((mod, modIndex) => (
                        <li key={modIndex} className="enrollment-module-item">
                          <strong>
                            {modIndex + 1}. {mod.title}
                          </strong>
                          {mod.topics && mod.topics.length > 0 && (
                            <ul className="enrollment-module-topics">
                              {mod.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="enrollment-module-topic">
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Feature Badges */}
              {course.features && course.features.length > 0 && (
                <div className="enrollment-card-features">
                  {course.features.map((feature, featureIndex) => (
                    <span
                      className="enrollment-card-feature"
                      key={featureIndex}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="enrollment-card-actions">
                <Link
                  to={`/curriculum/${course.slug}`}
                  className="btn btn-secondary"
                >
                  상세보기
                </Link>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    alert(
                      `"${course.title}" 과정 신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다.`
                    )
                  }
                >
                  신청하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Process Info */}
      <section
        className="enrollment-section"
        style={{ paddingBottom: "4rem" }}
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="enrollment-section-heading">수강 신청 안내</h2>
          <div className="enrollment-process-grid">
            <div className="enrollment-card" style={{ textAlign: "center" }}>
              <div className="enrollment-process-num">01</div>
              <h3 className="enrollment-process-title">과정 선택</h3>
              <p className="enrollment-process-desc">
                원하는 과정을 확인하고 상세 내용을 살펴보세요.
              </p>
            </div>
            <div className="enrollment-card" style={{ textAlign: "center" }}>
              <div className="enrollment-process-num">02</div>
              <h3 className="enrollment-process-title">신청서 제출</h3>
              <p className="enrollment-process-desc">
                신청하기 버튼을 클릭하여 수강 신청서를 제출하세요.
              </p>
            </div>
            <div className="enrollment-card" style={{ textAlign: "center" }}>
              <div className="enrollment-process-num">03</div>
              <h3 className="enrollment-process-title">수강 시작</h3>
              <p className="enrollment-process-desc">
                담당자 확인 후 안내에 따라 수강을 시작합니다.
              </p>
            </div>
          </div>

          <div className="enrollment-contact-box">
            <p className="enrollment-contact-label">
              수강 관련 문의사항이 있으신가요?
            </p>
            <p className="enrollment-contact-info">
              이메일: contact@dreamit.co.kr | 전화: 02-1234-5678
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
