import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/framework', label: 'Framework' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/evaluation-areas', label: 'Evaluation Areas' },
    { path: '/about', label: 'About' },
    { path: '/access', label: 'Access' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-emerald-500/5 border-b border-gray-200/50'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-2.5 rounded-xl shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                CleanPath Reviews
              </h1>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-emerald-700'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {location.pathname === item.path && (
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200/50"></span>
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
