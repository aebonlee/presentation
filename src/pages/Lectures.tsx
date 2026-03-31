import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import { lectures } from '../data/lectures';

const Lectures = () => {
  useAOS();
  const [selectedId, setSelectedId] = useState<string>(lectures[0]?.id ?? '');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selected = lectures.find((l) => l.id === selectedId) ?? lectures[0];

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
          <div className="lectures-layout">
            {/* Mobile sidebar toggle */}
            <button
              className="lectures-sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? '메뉴 닫기' : '강의안 목록 열기'}
              aria-expanded={sidebarOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              강의안 목록
            </button>

            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
              <div
                className="lectures-sidebar-overlay"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
            )}

            {/* Left sidebar */}
            <aside
              className={`lectures-sidebar${sidebarOpen ? ' open' : ''}`}
              role="navigation"
              aria-label="강의안 목록"
            >
              <h2 className="lectures-sidebar-title">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M6 6h8M6 10h8M6 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                강의안 목록
              </h2>
              <ul className="lectures-sidebar-list">
                {lectures.map((lecture) => (
                  <li key={lecture.id}>
                    <button
                      className={`lectures-sidebar-item${selectedId === lecture.id ? ' active' : ''}`}
                      onClick={() => {
                        setSelectedId(lecture.id);
                        setSidebarOpen(false);
                      }}
                      aria-current={selectedId === lecture.id ? 'page' : undefined}
                    >
                      <span className="lectures-sidebar-item-category">{lecture.category}</span>
                      <span className="lectures-sidebar-item-title">{lecture.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main content: inline PDF viewer */}
            <main className="lectures-content" data-aos="fade-up">
              <div className="lectures-viewer-header">
                <div className="lectures-viewer-info">
                  <span className="lectures-viewer-category">{selected.category}</span>
                  <h2 className="lectures-viewer-title">{selected.title}</h2>
                  <p className="lectures-viewer-desc">{selected.description}</p>
                </div>
                <a
                  href={selected.pdfPath}
                  download
                  className="lectures-download-btn"
                  aria-label={`${selected.title} PDF 다운로드`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M9 2v10m0 0l-3.5-3.5M9 12l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  다운로드
                </a>
              </div>
              <div className="lectures-viewer-body">
                <iframe
                  key={selected.id}
                  src={selected.pdfPath}
                  title={`${selected.title} PDF 뷰어`}
                  className="lectures-pdf-iframe"
                />
                <div className="lectures-pdf-fallback">
                  <p>PDF를 표시할 수 없는 경우:</p>
                  <a href={selected.pdfPath} download className="lectures-fallback-link">
                    PDF 다운로드
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lectures;
