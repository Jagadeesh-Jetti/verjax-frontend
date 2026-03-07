import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../features/auth/pages/RegisterPage';
import { LoginPage } from '../features/auth/pages/LoginPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
