import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLaravel, FaReact, FaRegPaperPlane } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

export function CarouselDemo() {
  const items = [
    {
      imgSrc: "public/images/notesapp.png",
      title: "Notes App",
      description: (
        <>
          <FaReact className="me-2" /> <RiTailwindCssFill />
        </>
      ), 
      github:"https://github.com/AzharAndriann/NotesApp",
      sites:"https://notes-app-tau-five.vercel.app/",
    },
    {
      imgSrc: "public/images/thebesteats.png",
      title: "The Best Eats",
      description: (
        <>
          <FaReact className="me-2" /> <RiTailwindCssFill />
        </>
      ), 
      github:"https://github.com/AzharAndriann/TheBestEats",
      sites:"https://the-best-eats.vercel.app/",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      title: "Bursa Kerja Khusus",
      description: (
        <>
          <FaLaravel className="me-2" /> <FaBootstrap />
        </>
      ), 
      github:"https://github.com/kafipratama11/bursa-kerja-khusus",
      sites:"",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      title: "Laporan BK",
      description: (
        <>
          <FaLaravel className="me-2" /> <FaBootstrap />
        </>
      ), 
      github:"https://github.com/Cahyooxz/laporan_bk",
      sites:"",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      title: "Project 5",
      description: (
        <>
          <FaReact className="me-2" /> <RiTailwindCssFill />
        </>
      ), 
      github:"https://github.com/kafipratama11/bursa-kerja-khusus",
      sites:"https://github.com/kafipratama11/bursa-kerja-khusus",

    },
    {
      imgSrc: "public/images/trigonometriapp.png",
      title: "Trigonometri",
      description: (
        <>
          <FaHtml5 className="me-2" /> <FaCss3Alt className="me-2" /> <RiJavascriptFill />
        </>
      ), 
      github:"https://github.com/AzharAndriann/Matematika",
      sites:"https://grafik-sinus.vercel.app/",

    },
    {
      imgSrc: "public/images/trigonometriapp.png",
      title: "Inventaris App",
      description: (
        <>
          <FaLaravel className="me-2" /> <RiTailwindCssFill />
        </>
      ), 
      github:"https://github.com/AzharAndriann/inventaris-app",
      sites:"",

    },
  ];

  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 dark:bg-black dark:border-black">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-32 object-cover rounded-md mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-800 flex text-xl dark:text-white">{item.description}</p>
                  <div className="flex items-center mt-4">
                    <a href={item.github} target="e_blank"> <FaGithub className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300 mx-3" size={25} /></a>
                    <a href={item.sites} target="e_blank"> <FaRegPaperPlane className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-slate-400 duration-300 mx-3" size={25} /></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}