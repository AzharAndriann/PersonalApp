import React, {useEffect, useState} from "react"
import {AiOutlineClose } from "react-icons/ai";
import { GoProjectRoadmap, GoCodeReview } from "react-icons/go";
import { RxMoon } from "react-icons/rx";
import {FaSun, FaRegUser}  from "react-icons/fa"
import { CgMenuMotion } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nav, setNav] = useState(false)


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className="flex justify-between z-50 p-4 dark:bg-black fixed bg-opacity-50 backdrop-blur-lg dark:bg-opacity-50 dark:backdrop-blur-lg w-full border-b border border-b-slate-200 dark:border-b-slate-100">
      {/* Left Side */}
      <div className="flex items-center whitespace-nowrap">
        <div onClick={() => setNav(!nav)} className="cursor-pointer ms-1 lg:hidden">
          <CgMenuMotion size={30} />
        </div>
        <h1 className="text-xl sm:text-md lg:text-3xl px-2 font-bold">
          Azhar Andrian
        </h1>
        <div className="hidden lg:flex">
          <ul className="flex text-xl text-black dark:text-white pt-1">
            <li className="px-5 font-semibold"><a href="#home">Home</a></li>
            <li className="px-5 font-semibold"><a href="#about">About Me</a></li>
            <li className="px-5 font-semibold"><a href="#projects">My Projects</a></li>
            <li className="px-5 font-semibold"><a href="#home">Testimonials</a></li>
          </ul>
        </div>
      </div>


      {/* card button */}
      <button 
        onClick={toggleDarkMode}  
        className="border-2 border-black dark:border-white text-black dark:text-white py-2 pl-2 me-1 rounded-md"
      >
        {isDarkMode ? <FaSun className="mr-2"/> : <RxMoon className="mr-2"/>}
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? 
      <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
       : ''}


    {/* side drawer menu */}
      
    <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white dark:bg-black z-10 duration-500" : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300"}>
    <AiOutlineClose
    onClick={() => setNav(!nav)}
     size={30} className="absolute right-4 top-4 cursor-pointer" />
    <h2 className="text-2xl p-4 font-bold">
      Azhar Andrian
    </h2>
      <nav>
        <ul className="flex flex-col p-4 text-black dark:text-white">
          <li className="text-xl font-semibold py-4 flex"><IoHomeOutline size={25} className="mr-4" />
          <a href="#home">Home</a></li>
          <li className="text-xl font-semibold py-4 flex"><FaRegUser size={25} className="mr-4" />
          <a href="#about">About Me</a></li>
          <li className="text-xl font-semibold py-4 flex"><GoProjectRoadmap size={25} className="mr-4" />
          <a href="#projects">Projects</a></li>
          <li className="text-xl font-semibold py-4 flex"><GoCodeReview size={25} className="mr-4" />
          <a href="#testimoni">Testimonials</a></li>
        </ul>
      </nav>
    </div>

    </div>
  );
}

export default Navbar;
