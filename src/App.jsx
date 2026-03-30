import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CourseDetail = lazy(() => import('./pages/courses/CourseDetail'));
const ToolsOverview = lazy(() => import('./pages/tools/ToolsOverview'));
const ToolDetail = lazy(() => import('./pages/tools/ToolDetail'));

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="curriculum/:slug" element={<CourseDetail />} />
        <Route path="tools" element={<ToolsOverview />} />
        <Route path="tools/:toolId" element={<ToolDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
