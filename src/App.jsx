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
const LearningPage = lazy(() => import('./pages/learning/LearningPage'));
const Enrollment = lazy(() => import('./pages/Enrollment'));
const Glossary = lazy(() => import('./pages/Glossary'));
const Practice = lazy(() => import('./pages/Practice'));
const Request = lazy(() => import('./pages/Request'));
const Community = lazy(() => import('./pages/Community'));

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="learn" element={<LearningPage />} />
        <Route path="learn/:categoryId" element={<LearningPage />} />
        <Route path="learn/:categoryId/:topicId" element={<LearningPage />} />
        <Route path="enrollment" element={<Enrollment />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="practice" element={<Practice />} />
        <Route path="request" element={<Request />} />
        <Route path="community" element={<Community />} />
        <Route path="curriculum/:slug" element={<CourseDetail />} />
        <Route path="tools" element={<ToolsOverview />} />
        <Route path="tools/:toolId" element={<ToolDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
