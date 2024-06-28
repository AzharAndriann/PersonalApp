import React from 'react';
import { CarouselDemo } from './demo/CarouselDemo';

const Projects = () => {
  return (
    <section id="projects" className="py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <CarouselDemo />
      </div>
    </section>
  );
};

export default Projects;
