import { LoginPage } from '../auth/pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import {Navbar} from '../ui'
import {HeroesRoutes} from '../heroes/routes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
