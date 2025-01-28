import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gift className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            wishr
          </span>
        </Link>
        <div className="flex">
          <a
            href="https://app.wishr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 md:px-6 md:py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition text-sm md:text-base"
          >
            Try the Web App (Beta)
          </a>
        </div>
      </div>
    </header>
  );
}