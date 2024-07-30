"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Welcome to Soriful's Web Development Services! With 2 years of dedicated learning and 6 months of remote intern experience in Australia odoo, I offer comprehensive and high-quality web development solutions specializing in the MERN stack. Enhancing code quality and maintainability by leveraging TypeScript's static typing, ensuring fewer bugs and more robust applications.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "React.js & Next.js: I build dynamic, high-performing, and responsive user interfaces using React.js and Next.js. My focus is on creating seamless user experiences with fast-loading, SEO-friendly website. Mastery in Tailwind CSS, Material-UI, Ant Design, and Bootstrap to craft visually appealing and user-friendly interfaces tailored to your brand's unique style.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Email Template Design",
    description:
      "Elevate your email marketing campaigns with professional and visually stunning email templates designed by Soriful. With a keen eye for design and a solid understanding of modern email marketing strategies, I offer custom email template design services that help you connect with your audience effectively and drive engagement. Crafting unique and personalized email templates that reflect your brand's identity and resonate with your target audience.",
    href: "",
  },
  {
    num: "04",
    title: "SEO With Next.js",
    description:
      "In the competitive digital landscape, optimizing your website for search engines is crucial for driving organic traffic. Next.js, offers unique advantages for SEO. By leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG), Next.js ensures your pages are fully rendered and load quickly. Next.js helps elevate your search engine rankings and attract more visitors. Invest in Next.js SEO to maximize your online presence and achieve lasting digital success",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-full flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
