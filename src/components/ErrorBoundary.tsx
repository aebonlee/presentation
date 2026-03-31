import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="not-found-page">
          <div>
            <div className="not-found-code text-gradient">오류</div>
            <h1 className="not-found-title">페이지를 표시할 수 없습니다</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
              예기치 않은 오류가 발생했습니다. 페이지를 새로고침하거나 홈으로 이동해주세요.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
              >
                새로고침
              </button>
              <Link to="/" className="btn btn-primary" onClick={() => this.setState({ hasError: false })}>
                홈으로 이동
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
