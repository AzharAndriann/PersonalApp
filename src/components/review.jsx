import React from 'react';
import { CardWithFormDemo } from './demo/CardWithFormDemo';

const Review = () => {
  return (
    <section id="projects" className="py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Review</h2>
        
        <CardWithFormDemo />
      </div>
    </section>
  );
};

export default Review;
