import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import { lectures, lectureCategories } from '../data/lectures';

const Lectures = () => {
  useAOS();
  const [activeCategory, setActiveCategory] = useState('전체');
  const [viewingPdf, setViewingPdf] = useState<{ title: string; pdfPath: string; description: string } | null>(null);

  const filtered = lectures.filter(
    (item) => activeCategory === '전체' || item.category === activeCategory
  );

  const closePdf = () => setViewingPdf(null);

  return (
    <>
      <SEOHead
        title="학습 강의안"
        description="프레젠테이션 학습 강의안을 PDF로 확인하세요. 기초, 디자인, 스피치, 데이터, 스토리텔링 분야별 강의안을 제공합니다."
        path="/lectures"
      />

      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title" data-aos="fade-up">학습 강의안</h1>
          <p className="about-hero-desc" data-aos="fade-up" data-aos-delay="100">
            프레젠테이션 역량 향상을 위한 분야별 강의안을 PDF로 확인하세요
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lectures-filters" data-aos="fade-up">
            {lectureCategories.map((cat) => (
              <button
                key={cat}
                className={`lectures-filter${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="lectures-grid" data-aos="fade-up" data-aos-delay="100">
            {filtered.map((lecture) => (
              <div className="lecture-card" key={lecture.id}>
                <div className="lecture-card-icon" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="4" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M30 32l4 4 6-8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="lecture-card-category">{lecture.category}</span>
                <h3 className="lecture-card-title">{lecture.title}</h3>
                <p className="lecture-card-desc">{lecture.description}</p>
                <button
                  className="lecture-card-btn"
                  onClick={() => setViewingPdf(lecture)}
                  aria-label={`${lecture.title} PDF 보기`}
                >
                  PDF 강의안 보기
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>
              <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 8 }}>해당 카테고리에 강의안이 없습니다</p>
            </div>
          )}
        </div>
      </section>

      {viewingPdf && (
        <div className="lecture-modal-overlay" onClick={closePdf} role="dialog" aria-modal="true" aria-label={`${viewingPdf.title} PDF 뷰어`}>
          <div className="lecture-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lecture-modal-header">
              <h2 className="lecture-modal-title">{viewingPdf.title}</h2>
              <button className="lecture-modal-close" onClick={closePdf} aria-label="닫기">&times;</button>
            </div>
            <div className="lecture-modal-body">
              <iframe
                src={viewingPdf.pdfPath}
                title={viewingPdf.title}
                className="lecture-pdf-viewer"
              />
              <div className="lecture-pdf-fallback">
                <p>PDF를 표시할 수 없는 경우:</p>
                <a href={viewingPdf.pdfPath} download className="lecture-download-btn">
                  PDF 다운로드
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lectures;
