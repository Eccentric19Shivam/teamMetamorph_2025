import { useEffect, useState } from 'react';

import { AnimateOnScroll } from './components/AnimateOnScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this based on your needs)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main>
        <AnimateOnScroll animation="fade-down">
          <Hero />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={200}>
          <About />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={600}>
          <Team />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={600}>
          <Events />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={600}>
          <Achievements />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={600}>
          <Contact />
        </AnimateOnScroll>
      </main>
      <AnimateOnScroll animation="fade-down" delay={600}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}

export default App;