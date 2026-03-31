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
  const noHeroPage = location.pathname.startsWith('/learn') || location.pathname === '/login' || /^\/tools\/[^/]+$/.test(location.pathname);
  const showScrolled = scrolled || noHeroPage;

  const themeIcon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🔄';
  const themeLabel = theme === 'light' ? '라이트 모드' : theme === 'dark' ? '다크 모드' : '자동 모드';

  const colorLabels = { blue: '블루', teal: '틸', purple: '퍼플', emerald: '에메랄드', gold: '골드' };

  /* ── Dropdown keyboard handler ── */
  const handleDropdownKeyDown = (e, isOpen, setOpen) => {
    if (e.key === 'Escape' && isOpen) {
      setOpen(false);
      e.currentTarget.focus();
    } else if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
      e.preventDefault();
      setOpen(true);
    } else if (e.key === 'ArrowDown' && isOpen) {
      e.preventDefault();
      const menu = e.currentTarget.nextElementSibling;
      const first = menu?.querySelector('[role="menuitem"]');
      first?.focus();
    }
  };

  /* ── Menu item keyboard handler (Arrow Up/Down/Escape) ── */
  const handleMenuItemKeyDown = (e, setOpen) => {
    const items = Array.from(e.currentTarget.parentElement.querySelectorAll('[role="menuitem"]'));
    const idx = items.indexOf(e.currentTarget);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      e.currentTarget.closest('.nav-dropdown')?.querySelector('button')?.focus();
    }
  };

  return (
    <nav className={`navbar ${showScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} role="navigation" aria-label="메인 네비게이션">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="Presentation 홈으로 이동">
          <div className="navbar-brand-icon" aria-hidden="true">P</div>
          Presentation
        </Link>

        <div className={`navbar-nav ${mobileOpen ? 'open' : ''}`} id="main-nav" role="menubar">
          {/* 학습 드롭다운 */}
          <div className={`nav-dropdown ${learnOpen ? 'open' : ''}`}>
            <button
              className={`nav-link ${isActive('/learn') ? 'active' : ''}`}
              onClick={() => setLearnOpen(!learnOpen)}
              onKeyDown={(e) => handleDropdownKeyDown(e, learnOpen, setLearnOpen)}
              onMouseEnter={() => { if (window.innerWidth > 1024) setLearnOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setLearnOpen(false); }}
              aria-expanded={learnOpen}
              aria-haspopup="true"
              aria-controls="learn-dropdown-menu"
            >
              A ~ Z 학습 ▾
            </button>
            <div
              className="nav-dropdown-menu"
              id="learn-dropdown-menu"
              role="menu"
              aria-label="학습 카테고리"
              onMouseEnter={() => { if (window.innerWidth > 1024) setLearnOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setLearnOpen(false); }}
            >
              <Link to="/learn/basics" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>프레젠테이션 기초</Link>
              <Link to="/learn/slide-design" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>슬라이드 디자인</Link>
              <Link to="/learn/speech" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>스피치와 전달력</Link>
              <Link to="/learn/data-viz" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>데이터 시각화</Link>
              <Link to="/learn/storytelling" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>스토리텔링</Link>
              <Link to="/learn/english-presentation" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setLearnOpen)}>영어 프레젠테이션</Link>
            </div>
          </div>

          {/* 도구 드롭다운 */}
          <div className={`nav-dropdown ${toolsOpen ? 'open' : ''}`}>
            <button
              className={`nav-link ${isActive('/tools') ? 'active' : ''}`}
              onClick={() => setToolsOpen(!toolsOpen)}
              onKeyDown={(e) => handleDropdownKeyDown(e, toolsOpen, setToolsOpen)}
              onMouseEnter={() => { if (window.innerWidth > 1024) setToolsOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setToolsOpen(false); }}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
              aria-controls="tools-dropdown-menu"
            >
              제작도구 ▾
            </button>
            <div
              className="nav-dropdown-menu"
              id="tools-dropdown-menu"
              role="menu"
              aria-label="제작도구 목록"
              onMouseEnter={() => { if (window.innerWidth > 1024) setToolsOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setToolsOpen(false); }}
            >
              <Link to="/tools" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>도구 비교</Link>
              <Link to="/tools/powerpoint" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>PowerPoint</Link>
              <Link to="/tools/google-slides" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>Google Slides</Link>
              <Link to="/tools/canva" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>Canva</Link>
              <Link to="/tools/miricanvas" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>미리캔버스</Link>
              <Link to="/tools/figma" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>Figma</Link>
              <Link to="/tools/genially" className="nav-dropdown-item" role="menuitem" tabIndex={-1} onKeyDown={(e) => handleMenuItemKeyDown(e, setToolsOpen)}>Genially</Link>
            </div>
          </div>

          <Link to="/glossary" className={`nav-link ${isActive('/glossary') ? 'active' : ''}`} role="menuitem">용어사전</Link>
          <Link to="/practice" className={`nav-link ${isActive('/practice') ? 'active' : ''}`} role="menuitem">퀴즈</Link>
          <Link to="/enrollment" className={`nav-link ${isActive('/enrollment') ? 'active' : ''}`} role="menuitem">과정 신청</Link>
          <Link to="/request" className={`nav-link ${isActive('/request') ? 'active' : ''}`} role="menuitem">제작 의뢰</Link>
          <Link to="/community" className={`nav-link ${isActive('/community') ? 'active' : ''}`} role="menuitem">커뮤니티</Link>
        </div>

        <div className="navbar-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`테마 전환: 현재 ${themeLabel}`}
            title={`테마: ${theme}`}
          >
            {themeIcon}
          </button>

          <div ref={colorRef} style={{ position: 'relative' }}>
            <button
              className="color-picker-btn"
              onClick={() => setColorOpen(!colorOpen)}
              aria-label="컬러 테마 선택"
              aria-expanded={colorOpen}
              aria-haspopup="true"
              title="컬러 테마"
            >
              🎨
            </button>
            <div className={`color-picker-dropdown ${colorOpen ? 'open' : ''}`} role="listbox" aria-label="컬러 테마 목록">
              {COLORS.map(c => (
                <button
                  key={c}
                  className={`color-dot color-dot-${c} ${color === c ? 'active' : ''}`}
                  onClick={() => { setColor(c); setColorOpen(false); }}
                  role="option"
                  aria-selected={color === c}
                  aria-label={`${colorLabels[c]} 테마`}
                  title={colorLabels[c]}
                />
              ))}
            </div>
          </div>

          {isAuthenticated ? (
            <div ref={userRef} className="user-menu">
              <button
                className="user-avatar"
                onClick={() => setUserOpen(!userOpen)}
                aria-label={`사용자 메뉴: ${getUserName()}`}
                aria-expanded={userOpen}
                aria-haspopup="true"
              >
                {getUserInitial()}
              </button>
              <div className={`user-dropdown ${userOpen ? 'open' : ''}`} role="menu" aria-label="사용자 메뉴">
                <div style={{ padding: '10px 16px', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {getUserName()}
                </div>
                <div className="user-dropdown-divider" role="separator" />
                <button className="user-dropdown-item" onClick={handleSignOut} role="menuitem">
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
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
          >
            <span className="navbar-toggle-bar" aria-hidden="true" />
            <span className="navbar-toggle-bar" aria-hidden="true" />
            <span className="navbar-toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
