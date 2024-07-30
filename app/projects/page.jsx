"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full stack project",
    title: "Support the poor kid's",
    name: "Online Support",
    stack: [
      { name: "React" },
      { name: "Redux" },
      { name: "Tailwind css" },
      { name: "AOS" },
    ],
    description:
      "This is a charity website user can donate cloths, money and also anyone can join as a volunteer to support the poor kid's.",
    live: "https://preeminent-treacle-57fedb.netlify.app",
    image: "/assets/work/thumb1.jpg",
    github: "https://github.com/AhsanPhero2022/cloth-donation-client",
  },
  {
    num: "02",
    category: "Full stack website",
    title: "E-commerce website",
    name: "online baby care store",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Tailwind css" },
    ],
    description:
      "User can buy products for his Baby, there is authorized all products.",
    live: "https://baby-care-store-next-js-client-dun.vercel.app/",
    image: "/assets/work/thumb2.jpg",
    github: "https://github.com/AhsanPhero2022/babyCareStore-Next.js-client",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Best chef in USA",
    name: "USA chef",
    stack: [{ name: "React" }, { name: "Bootstrap" }],
    description: "This is a chef review website you can see  the chef details.",
    live: "https://assignment-10-d44c0.web.app/",
    image: "/assets/work/thumb3.jpg",
    github: "https://github.com/AhsanPhero2022/USA-chef-project",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* project details  */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            {/* project description */}
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            {/* button link*/}
            <div className="flex items-center gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full  z-10 bg-gradient-to-r from-black/5 to-black/10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          src={project.image}
                          alt="loading..."
                          className=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
