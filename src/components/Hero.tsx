
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover md:object-fill lg:object-cover min-w-full min-h-full max-w-none'
      >
        <source src='/HeroBg.mp4' type='video/mp4'/>
      </video>
      <div className="absolute inset-0 opacity-20 bg-cover" ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-float">
          <img 
            src="/logo.png" 
            alt="Team Metamorph Logo" 
            className="h-32 w-auto mx-auto mb-8"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Team Metamorph
        </h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-semibold italic mb-8">
          "Where eccentricity personifies elegance"
        </p>
        <p className="text-white max-w-2xl mx-auto mb-12">
          The Material Science team at NIT Hamirpur, pioneering innovation through material engineering and research.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#events"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Events
          </a>
      
        </div>
      </div>
    </section>
  );
};

export default Hero;