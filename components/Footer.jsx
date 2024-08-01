import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="border-1 border-gray-700" />
      <div className="max-w-7xl px-4 md:px-10 mx-auto text-gray-300 flex flex-col md:flex-row justify-between items-center py-6 space-y-4">
        <h3 className="font-bold text-2xl text-gray-300">
          <span className="text-accent">SORIFUL</span> ISMAM
        </h3>
        <p>&copy; Copyright 2023 | All right reserved.</p>
        <div className="flex gap-3">
          <a
            target="_blunk"
            href="https://www.linkedin.com/in/sharif-ahmad-1088ba235/"
          >
            <FaLinkedin
              size={18}
              className="text-accent"
            />
          </a>
          <a target="_blunk" href="https://github.com/AhsanPhero2022">
            <FaGithub size={18} className="text-accent" />
          </a>
          <a target="_blunk" href="https://www.facebook.com/abirkhan.mugall">
            <FaFacebook
              size={18}
              className="text-accent"
            />
          </a>
          <a href="">
            <FaTwitter
              size={18}
              className="text-accent"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
