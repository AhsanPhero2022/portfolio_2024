"use client";

import { Description } from "@radix-ui/react-dialog";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "web development",
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, at quisquam sit beatae ratione dolore.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, at quisquam sit beatae ratione dolore.",
    href: "",
  },
  {
    num: "03",
    title: "Logo design",
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, at quisquam sit beatae ratione dolore.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, at quisquam sit beatae ratione dolore.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                <div>
                  <div>{service.num}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
