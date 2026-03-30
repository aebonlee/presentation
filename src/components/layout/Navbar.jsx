import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from '../../utils/auth';
import { useToast } from '../../contexts/ToastContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, color, setColor, COLORS } = useTheme();
  const { user, isAuthenticated, getUserName, getUserInitial } = useAuth();
  const toast = useToast();
  const colorRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLearnOpen(false);
    setToolsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (colorRef.current && !colorRef.current.contains(e.target)) setColorOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('로그아웃되었습니다.');
      setUserOpen(false);
    } catch {
      toast.error('로그아웃에 실패했습니다.');
    }
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Pages without dark hero sections need scrolled (glass) navbar from the start
  const noHeroPage = location.pathname.startsWith('/learn') || location.pathname === '/login';
  const showScrolled = scrolled || noHeroPage;

  const themeIcon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🔄';

  const colorLabels = { blue: '블루', teal: '틸', purple: '퍼플', emerald: '에메랄드', gold: '골드' };

  return (
    <nav className={`navbar ${showScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">P</div>
          Presentation
        </Link>

        <div className={`navbar-nav ${mobileOpen ? 'open' : ''}`}>
          {/* 학습 드롭다운 */}
          <div className={`nav-dropdown ${learnOpen ? 'open' : ''}`}>
            <button
              className={`nav-link ${isActive('/learn') ? 'active' : ''}`}
              onClick={() => setLearnOpen(!learnOpen)}
              onMouseEnter={() => { if (window.innerWidth > 1024) setLearnOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setLearnOpen(false); }}
            >
              A ~ Z 학습 ▾
            </button>
            <div
              className="nav-dropdown-menu"
              onMouseEnter={() => { if (window.innerWidth > 1024) setLearnOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setLearnOpen(false); }}
            >
              <Link to="/learn/basics" className="nav-dropdown-item">프레젠테이션 기초</Link>
              <Link to="/learn/slide-design" className="nav-dropdown-item">슬라이드 디자인</Link>
              <Link to="/learn/speech" className="nav-dropdown-item">스피치와 전달력</Link>
              <Link to="/learn/data-viz" className="nav-dropdown-item">데이터 시각화</Link>
              <Link to="/learn/storytelling" className="nav-dropdown-item">스토리텔링</Link>
              <Link to="/learn/english-presentation" className="nav-dropdown-item">영어 프레젠테이션</Link>
            </div>
          </div>

          {/* 도구 드롭다운 */}
          <div className={`nav-dropdown ${toolsOpen ? 'open' : ''}`}>
            <button
              className={`nav-link ${isActive('/tools') ? 'active' : ''}`}
              onClick={() => setToolsOpen(!toolsOpen)}
              onMouseEnter={() => { if (window.innerWidth > 1024) setToolsOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setToolsOpen(false); }}
            >
              제작도구 ▾
            </button>
            <div
              className="nav-dropdown-menu"
              onMouseEnter={() => { if (window.innerWidth > 1024) setToolsOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setToolsOpen(false); }}
            >
              <Link to="/tools" className="nav-dropdown-item">도구 비교</Link>
              <Link to="/tools/powerpoint" className="nav-dropdown-item">PowerPoint</Link>
              <Link to="/tools/google-slides" className="nav-dropdown-item">Google Slides</Link>
              <Link to="/tools/canva" className="nav-dropdown-item">Canva</Link>
              <Link to="/tools/miricanvas" className="nav-dropdown-item">미리캔버스</Link>
              <Link to="/tools/figma" className="nav-dropdown-item">Figma</Link>
              <Link to="/tools/genially" className="nav-dropdown-item">Genially</Link>
            </div>
          </div>

          <Link to="/glossary" className={`nav-link ${isActive('/glossary') ? 'active' : ''}`}>용어사전</Link>
          <Link to="/practice" className={`nav-link ${isActive('/practice') ? 'active' : ''}`}>퀴즈</Link>
          <Link to="/enrollment" className={`nav-link ${isActive('/enrollment') ? 'active' : ''}`}>과정 신청</Link>
          <Link to="/request" className={`nav-link ${isActive('/request') ? 'active' : ''}`}>제작 의뢰</Link>
          <Link to="/community" className={`nav-link ${isActive('/community') ? 'active' : ''}`}>커뮤니티</Link>
        </div>

        <div className="navbar-controls">
          <button className="theme-toggle" onClick={toggleTheme} title={`테마: ${theme}`}>
            {themeIcon}
          </button>

          <div ref={colorRef} style={{ position: 'relative' }}>
            <button className="color-picker-btn" onClick={() => setColorOpen(!colorOpen)} title="컬러 테마">
              🎨
            </button>
            <div className={`color-picker-dropdown ${colorOpen ? 'open' : ''}`}>
              {COLORS.map(c => (
                <button
                  key={c}
                  className={`color-dot color-dot-${c} ${color === c ? 'active' : ''}`}
                  onClick={() => { setColor(c); setColorOpen(false); }}
                  title={colorLabels[c]}
                />
              ))}
            </div>
          </div>

          {isAuthenticated ? (
            <div ref={userRef} className="user-menu">
              <button className="user-avatar" onClick={() => setUserOpen(!userOpen)}>
                {getUserInitial()}
              </button>
              <div className={`user-dropdown ${userOpen ? 'open' : ''}`}>
                <div style={{ padding: '10px 16px', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {getUserName()}
                </div>
                <div className="user-dropdown-divider" />
                <button className="user-dropdown-item" onClick={handleSignOut}>
                  로그아웃
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="navbar-btn navbar-btn-login">로그인</Link>
          )}

          <button
            className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
