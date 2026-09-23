import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import BookingPage from './pages/BookingPage';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
