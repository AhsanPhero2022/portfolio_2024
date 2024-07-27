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

const projects = [
  {
    num: "01",
    category: "Projects",
    title: "project one",
    name: "javascript",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    live: "https://github.com/your-username/project-one",
    image: "/assets/work/thumb1.png",
    github: "https://github.com/your-username/project-one",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project one",
    name: "javascript",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    live: "https://github.com/your-username/project-one",
    image: "/assets/work/thumb2.png",
    github: "https://github.com/your-username/project-one",
  },
  {
    num: "03",
    category: "Frontend",
    title: "project one",
    name: "javascript",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    live: "https://github.com/your-username/project-one",
    image: "/assets/work/thumb3.png",
    github: "https://github.com/your-username/project-one",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* project details  */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
