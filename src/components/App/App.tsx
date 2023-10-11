import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const LazyHomePage = lazy(() => import('../../pages/Home/HomePage'));
const LazyAdminPage = lazy(() => import('../../pages/Admin/AdminPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LazyHomePage />} />
        <Route path="/admin" element={<LazyAdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
