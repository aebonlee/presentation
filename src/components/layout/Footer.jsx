import { Link } from 'react-router-dom';

const Footer = () => {
  const handleFamilySite = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      e.target.value = '';
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="footer-brand-icon">P</div>
              <div className="footer-brand-text">
                Dream<span>IT</span> 프레젠테이션
              </div>
            </div>
            <p className="footer-desc">
              효과적인 발표 기법과 시각 자료 제작 능력을 학습합니다.
              PPT, 스피치, 시각디자인, 스토리텔링을 통해 프레젠테이션 역량을 키워보세요.
            </p>
            <div className="footer-family">
              <select className="footer-family-select" onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>패밀리 사이트</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz 메인</option>
                <option value="https://allthat.dreamitbiz.com">DreamIT 올댓</option>
                <option value="https://books.dreamitbiz.com">DreamIT 출판사</option>
                <option value="https://ahp-basic.dreamitbiz.com">AHP 연구 플랫폼</option>
                <option value="https://competency.dreamitbiz.com">핵심역량 자가측정</option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="footer-title">학습</h4>
            <div className="footer-links">
              <Link to="/learn/basics" className="footer-link">프레젠테이션 기초</Link>
              <Link to="/learn/slide-design" className="footer-link">슬라이드 디자인</Link>
              <Link to="/learn/speech" className="footer-link">스피치와 전달력</Link>
              <Link to="/learn/data-viz" className="footer-link">데이터 시각화</Link>
              <Link to="/learn/storytelling" className="footer-link">스토리텔링</Link>
              <Link to="/learn/english-presentation" className="footer-link">영어 프레젠테이션</Link>
              <Link to="/glossary" className="footer-link">용어사전</Link>
              <Link to="/practice" className="footer-link">퀴즈</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">도구 학습</h4>
            <div className="footer-links">
              <Link to="/tools/powerpoint" className="footer-link">PowerPoint</Link>
              <Link to="/tools/google-slides" className="footer-link">Google Slides</Link>
              <Link to="/tools/canva" className="footer-link">Canva</Link>
              <Link to="/tools/miricanvas" className="footer-link">미리캔버스</Link>
              <Link to="/tools/figma" className="footer-link">Figma</Link>
              <Link to="/tools/genially" className="footer-link">Genially</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">연락처</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">Email</span>
              <span>aebon@dreamitbiz.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">Tel</span>
              <span>010-3700-0629</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">Chat</span>
              <span>카카오톡: aebon</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">Hours</span>
              <span>평일 09:00 ~ 18:00</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 드림아이티비즈. All rights reserved.
          </div>
          <div className="footer-info">
            대표: 이에본 | 사업자등록번호: 000-00-00000
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
