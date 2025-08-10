import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  icon: string;
}

interface HeaderProps {
  domains: Domain[];
}

const Header: React.FC<HeaderProps> = ({ domains }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
            <Award className="w-8 h-8 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              CertGen Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-emerald-600 transition-colors font-medium ${
                isActive('/') ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : ''
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center">
                Domains
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {domains.map(domain => (
                    <Link
                      key={domain.id}
                      to={`/domain/${domain.id}`}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      <span className="text-lg mr-3">{domain.icon}</span>
                      {domain.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-emerald-600 transition-colors font-medium ${
                  isActive('/') ? 'text-emerald-600' : ''
                }`}
              >
                Home
              </Link>
              
              <div className="pl-4 space-y-3">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Domains</p>
                {domains.map(domain => (
                  <Link
                    key={domain.id}
                    to={`/domain/${domain.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <span className="text-lg mr-3">{domain.icon}</span>
                    {domain.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;