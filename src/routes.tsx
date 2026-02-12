import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Products from './pages/products';
import Settings from './pages/settings';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
