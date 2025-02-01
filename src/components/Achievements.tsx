import { Trophy, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Our Achievements
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

          
          Through dedication, innovation, and teamwork, we've reached remarkable milestones. 
          Each achievement reflects our commitment to excellence and our passion for pushing boundaries.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 2023 Marshalling Team Card */}
        <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          <img 
            src="/image/2k23.png"
            alt="Marshalling Team 2023"
            className="w-full h-[400px] object-cover object-center rounded-2xl"
          />
          
          <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="h-8 w-8 text-yellow-400" strokeWidth={2.5} />
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">Best Marshalling Team</h3>
            </div>
            <div className="overflow-hidden">
              <p className="text-yellow-400 font-semibold text-lg mb-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100 drop-shadow-lg">
                2023
              </p>
              <p className="text-gray-100 leading-relaxed transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-200 text-sm sm:text-base drop-shadow-lg font-medium">
                Recognized for exceptional event management and crowd control excellence. Our team demonstrated outstanding coordination and leadership throughout various events.
              </p>
            </div>
          </div>
        </div>

        {/* 2024 Innovative Team Card */}
        <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          <img 
            src="/image/2k24.png"
            alt="Innovative Team 2024"
            className="w-full h-[400px] object-cover object-center rounded-2xl"
          />
          
          <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="h-8 w-8 text-blue-300" strokeWidth={2.5} />
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">Best Innovative Team</h3>
            </div>
            <div className="overflow-hidden">
              <p className="text-blue-300 font-semibold text-lg mb-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100 drop-shadow-lg">
                2024
              </p>
              <p className="text-gray-100 leading-relaxed transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-200 text-sm sm:text-base drop-shadow-lg font-medium">
                Awarded for groundbreaking solutions and creative approaches. Our team pushed boundaries and delivered innovative ideas that set new standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;