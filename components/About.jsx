/* eslint-disable @next/next/no-img-element */

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section className="container my-16">
      <div className="mt-8">
        <hr className="animate-bounce  h-2 w-[80px] mx-auto mb-2 border-0 rounded-full bg-accent" />
        <h2 className="poppins-font text-4xl font-bold text-center text-white">
          About Me
        </h2>
      </div>
      <div className="flex my-8 flex-col gap-4 xl:flex-row lg:flex-row justify-between items-center ">
        <div className="lg:w-[50%] xl:w[50%]">
          <img
            src="/assets/unnamed.jpg"
            className="h-full rounded-lg ring-2 ring-accent"
            alt=""
          />
          <p className="text-xl font-bold text-accent poppins-font mb-3">
            To know more Visit my_
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="https://www.linkedin.com/in/sharif-ahmad-1088ba235/">
              <FaLinkedin
                size={24}
                className="hover:text-accent  transition-all"
              />
            </a>
            <a href="https://github.com/AhsanPhero2022">
              <FaGithub
                size={24}
                className="hover:text-accent transition-all"
              />
            </a>
            <a href="https://www.facebook.com/abirkhan.mugall">
              <FaFacebook
                size={24}
                className="hover:text-accent transition-all"
              />
            </a>
            <a>
              <FaTwitter
                size={24}
                className="hover:text-accent transition-all"
              />
            </a>
          </div>
        </div>

        <div className="lg:w-[50%] xl:w[50%]">
          <p className="text-xl mb-1 font-bold text-accent poppins-font">
            Who I&apos;m
          </p>
          <h3 className="text-4xl font-bold text-gray-100 poppins-font">
            My name is Soriful Ismam,
          </h3>
          <p className=" mt-1 w-full text-gray-400 ">
            A 23-year-old web application developer, Currently pursuing a
            Bachelor of Social Science degree at Sirajganj Government College
            under the esteemed National University of Bangladesh, I am fueling
            my passion for technology and web development. I live in the
            picturesque village of Enayetpur, Khukni in Sirajganj.
          </p>
          <p className=" mt-4 mb-6 w-full text-gray-400 ">
            Coding isn&apos;t just a job for me, it&apos;s a passion that I
            pursue with dedication and enthusiasm. I constantly immerse myself
            in technological blogs and articles, keeping up-to-date with the
            latest trends and innovations. My hobbies are traveling and
            exploring new technology series.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
