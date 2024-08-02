import About from "@/components/About";
import Photo from "@/components/Photo";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Articles from "@/components/Articles";
import Contact from "./contact/page";
import Work from "./projects/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />
              <span className="text-accent"> Soriful Ismam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in MERN stack web development.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row  items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a download href="/assets/Sharif_Resume.pdf">
                  Download Resume
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <About />
      <Skills />
      <div className="my-16">
        <div className="flex flex-col text-center ">
          <hr className="animate-bounce  h-2 w-[80px] mx-auto mb-2 border-0 rounded-full bg-accent" />
          <h3 className="text-4xl  font-bold">My Projects</h3>
        </div>
        <Work />
      </div>
      <Articles />
      <div className="my-16">
        <div className="flex flex-col text-center ">
          <hr className="animate-bounce  h-2 w-[80px] mx-auto mb-2 border-0 rounded-full bg-accent" />
          <h3 className="text-4xl  font-bold">Contact me</h3>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Home;
