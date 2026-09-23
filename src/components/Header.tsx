import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (user) {
      navigate('/dashboard');
    } else {
      await signIn();
      navigate('/dashboard');
    }
  };

  return (
    <header className="bg-[#F9F9F6]/80 dark:bg-[#0A2540]/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm shadow-[#1A1C1B]/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#006B5C] dark:text-[#00BFA5] text-3xl">spa</span>
          <span className="text-2xl font-extrabold tracking-tight text-[#0A2540] dark:text-[#F9F9F6] font-headline">Silver Tech Concierge</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 font-label text-sm tracking-wide">
          <Link className="text-[#00BFA5] font-semibold hover:scale-105 transition-transform duration-300" to="/">Home</Link>
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-70 hover:scale-105 transition-transform duration-300" href="/#how-it-works">How it Works</a>
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-70 hover:scale-105 transition-transform duration-300" href="/#pricing">Pricing</a>
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-70 hover:scale-105 transition-transform duration-300" href="#">Concierges</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined p-2 rounded-full hover:bg-surface-container-low transition-colors">search</button>
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="hidden md:flex text-on-surface-variant font-semibold hover:text-navy transition-colors items-center justify-center">
                Dashboard
              </Link>
              <button onClick={signOut} className="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 active:scale-95 flex items-center justify-center">
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 active:scale-95 flex items-center justify-center">
              Member Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
