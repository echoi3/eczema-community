import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">EczemaConnect</Link>
        <div className="flex items-center space-x-4">
          <Link to="/forum" className="text-gray-600 hover:text-blue-600">Forum</Link>
          <Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
              <button onClick={signOut} className="text-gray-600 hover:text-blue-600">Sign Out</button>
            </>
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Sign In</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
