import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { signInWithGoogle, signInWithKakao } from '../utils/auth';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      toast.error('Google 로그인에 실패했습니다: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  const handleKakao = async () => {
    try {
      await signInWithKakao();
    } catch (err) {
      toast.error('카카오 로그인에 실패했습니다: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  return (
    <>
      <SEOHead title="로그인" path="/login" noindex />

      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">P</div>
            <h1 className="auth-title">로그인</h1>
            <p className="auth-subtitle">프레젠테이션 학습을 시작하세요</p>
          </div>

          <div className="auth-social">
            <button className="auth-social-btn auth-social-google" onClick={handleGoogle}>
              <span className="auth-social-icon">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </span>
              Google 계정으로 로그인
            </button>

            <button className="auth-social-btn auth-social-kakao" onClick={handleKakao}>
              <span className="auth-social-icon">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#191919" d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.8 5.108 4.516 6.463-.16.576-.58 2.09-.665 2.416-.104.403.147.398.31.289.127-.086 2.025-1.371 2.853-1.929A12.44 12.44 0 0 0 12 18.382c5.523 0 10-3.463 10-7.691S17.523 3 12 3z"/>
                </svg>
              </span>
              카카오 계정으로 로그인
            </button>
          </div>

          <div className="auth-footer">
            소셜 계정으로 간편하게 가입하고 로그인하세요.<br />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: 8, display: 'block' }}>
              로그인 시 서비스 이용약관에 동의합니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
