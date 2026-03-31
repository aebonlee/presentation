import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

const Loading = () => (
  <div className="loading-page">
    <div className="loading-spinner" />
  </div>
);

const PublicLayout = () => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">본문으로 건너뛰기</a>
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
