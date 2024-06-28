import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import Testimonials from './components/review';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
         <About />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
