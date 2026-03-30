import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Loading = () => (
  <div className="loading-page">
    <div className="loading-spinner" />
  </div>
);

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
