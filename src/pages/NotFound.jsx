import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead title="페이지를 찾을 수 없습니다" noindex />
      <div className="not-found-page">
        <div>
          <div className="not-found-code text-gradient">404</div>
          <h1 className="not-found-title">페이지를 찾을 수 없습니다</h1>
          <p className="not-found-desc">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
