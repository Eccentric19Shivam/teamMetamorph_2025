import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 3000ms (total time) / 100 (steps) = 30ms per step

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 overflow-hidden">
      {/* Stars background */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>
      
      {/* Rocket */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div className="rocket-container">
          <Rocket size={64} className="text-white rocket" strokeWidth={1.5} />
          {/* Rocket trail */}
          <div className="rocket-trail">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 20 - 10}px`,
                  animationDelay: `${Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mt-8">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;