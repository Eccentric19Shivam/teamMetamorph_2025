
import { Microscope, Users, Beaker } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Team Metamorph</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
            <Microscope className="h-12 w-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-4">Research Excellence</h3>
            <p className="text-gray-400">
              Pushing boundaries in material science through cutting-edge research and innovation.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
            <Users className="h-12 w-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-4">Collaborative Learning</h3>
            <p className="text-gray-400">
              Building a community of passionate material scientists and engineers.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
            <Beaker className="h-12 w-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-4">Practical Application</h3>
            <p className="text-gray-400">
              Bridging theoretical knowledge with hands-on experimentation and industry practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;