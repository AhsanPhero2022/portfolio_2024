import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skills = {
  title: "My Skills",
  skillList: [
    {
      image: (
        <Image
          src="/assets/images/html.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Html 5",
    },

    {
      image: (
        <Image
          src="/assets/images/css.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Css 3",
    },
    {
      image: (
        <Image
          src="/assets/images/js.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Javascript",
    },
    {
      image: (
        <Image
          src="/assets/images/ts.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Typescript",
    },
    {
      image: (
        <Image
          src="/assets/images/react.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "React.js",
    },
    {
      image: (
        <Image
          src="/assets/images/next.jpg"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Next.js",
    },
    {
      image: (
        <Image
          src="/assets/images/redux.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Redux",
    },
    {
      image: (
        <Image
          src="/assets/images/rtk.jpeg"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Redux RTK Query",
    },
    {
      image: (
        <Image
          src="/assets/images/materialui.jpeg"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Material_ui",
    },
    {
      image: (
        <Image
          src="/assets/images/antdesign.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Ant Design",
    },
    {
      image: (
        <Image
          src="/assets/images/node-js.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Node.js",
    },
    {
      image: (
        <Image
          src="/assets/images/express-js.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Express.js",
    },
    {
      image: (
        <Image
          src="/assets/images/mongodb.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Mongodb",
    },
    {
      image: (
        <Image
          src="/assets/images/mongoose.jpeg"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Mongoose",
    },
    {
      image: (
        <Image
          src="/assets/images/firebase.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Firebase",
    },
    {
      image: (
        <Image
          src="/assets/images/vercel.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Vercel",
    },
    {
      image: (
        <Image
          src="/assets/images/netlify.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Netlify",
    },
    {
      image: (
        <Image
          src="/assets/images/github.png"
          width={100}
          height={100}
          className="rounded-lg"
          alt=""
        />
      ),
      name: "Github",
    },
  ],
};

const Skills = () => {
  return (
    <section className="container my-16">
      <div className="flex flex-col gap-[30px] ">
        <div className="flex flex-col text-center my-4">
          <hr className="animate-bounce  h-2 w-[80px] mx-auto mb-2 border-0 rounded-full bg-accent" />
          <h3 className="text-4xl  font-bold">{skills.title}</h3>
        </div>
        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
          {skills.skillList.map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full hover:border-accent hover:border  h-[150px] bg-[#232329] rounded-xl flex justify-center items-center  group transition-all duration-300 hover:animate-pulse ">
                      <div className=" transition-all duration-300 group ">
                        {skill.image}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
