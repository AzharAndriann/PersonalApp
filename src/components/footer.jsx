import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black py-8 border-t border-slate-200 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Azhar Andrian. All rights reserved.</p>
        <p>Follow me on <a href="https://github.com/AzharAndriann" className="underline hover:text-slate-300 duration-500">GitHub</a> and <a href="https://www.linkedin.com/in/azhar-andrian-6894242a8/" className="underline hover:text-slate-300 duration-500">LinkedIn</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
