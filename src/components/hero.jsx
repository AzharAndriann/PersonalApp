import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-cover bg-center h-screen flex items-center dark:bg-black" 
      style={{ backgroundImage: 'url(/path-to-your-background-image.jpg\)' }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center text-black dark:text-white md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold">
            Hello,{' '}
            <TypeAnimation
              sequence={[
                "I'm Azhar Andrian", 
                2000, 
                "I'm a Fullstack Web Developer", 
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h2>
          <div className="mt-4 text-lg md:text-2xl">
            <p>Contact me on social media</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-start">
              <a href="https://x.com/azhardwiandrian" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/azhar-andrian-6894242a8/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300" size={30} />
              </a>
              <a href="https://github.com/AzharAndriann" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300" size={30} />
              </a>
              <a href="https://www.instagram.com/azharandrian_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300" size={30} />
              </a>
              <a href="https://wa.me/6281399733451" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300" size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img src="images/1.png" alt="Azhar Andrian" className="w-2/3 md:w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
