// src/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2 rounded-xl border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-all duration-300 backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icons Container */}
      <div className="relative w-6 h-6">
        {/* Sun Icon (Light Mode) */}
        <Sun 
          className={`absolute inset-0 text-blue-500 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-50'
          }`}
          size={24}
        />
        
        {/* Moon Icon (Dark Mode) */}
        <Moon 
          className={`absolute inset-0 text-blue-500 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-50'
          }`}
          size={24}
        />
      </div>
    </button>
  );
}