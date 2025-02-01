import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <img 
        src="/logo.png" 
        alt="Loading..." 
        className="w-32 h-32 animate-bounce"
      />
    </div>
  );
};

export default Preloader;