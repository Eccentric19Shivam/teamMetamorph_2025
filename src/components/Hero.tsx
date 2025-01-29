import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with hexagonal grid */}
      <div className="absolute inset-0 bg-[url('https://files.oaiusercontent.com/file-N8B9zMX2hjefp3w6zBL3FR?se=2025-01-14T13%3A46%3A11Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De445b17a-b779-44c1-a206-19dd8e880c38.webp&sig=y6f/74EwdFWcyiUA/wMW3UkQV25mgLvRCoeAxAVfJ44%3D')] opacity-20 bg-cover"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-float">
          <img 
            src="./assets/logo.png" 
            alt="Team Metamorph Logo" 
            className="h-32 w-auto mx-auto mb-8"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Team Metamorph
        </h1>
        <p className="text-xl sm:text-2xl text-blue-400 font-semibold italic mb-8">
          "Where eccentricity personifies elegance"
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          The Material Science team at NIT Hamirpur, pioneering innovation through material engineering and research.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#events"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Events
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-colors"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;