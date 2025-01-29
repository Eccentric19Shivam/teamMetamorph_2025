import React from 'react';
import { 
  Atom, 
  Microscope, 
  Calendar, 
  Users, 
  Trophy,
  Mail,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;