import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className={`  `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h1
              data-aos="fade-up"
              className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Dhrumil
            </h1>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Freelancer",
                2000,
                "Front-End Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="div"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
              {}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <Link
              href="https://www.linkedin.com/in/dhrumil-panchal-2240891b4/"
              target="_blank"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </Link>
            <Link
              href="./Dhrumil_Resume-4.pdf"
              className="flex items-center gap-2 border-2 text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download="Resume.pdf"
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </Link>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <Link href="https://github.com/DhrumilPanchal2905" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/dhrumil-panchal-2240891b4/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/dhrumilpanchal__/"
                  target="_blank"
                >
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/dhrumil.panchal.9406/"
                  target="_blank"
                >
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Dhrumil49449237" target="_blank">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {}
        {}
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <span className="">
              <img
                data-aos="fade-up"
                className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0 image-container"
                src="./DLogo.svg"
                alt="mine"
              />
            </span>
            <div className=" absolute bottom-12 md:bottom-3 right-[120px] md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-auto downArrow">
        <FiArrowDown className="animate-bounce h-6 w-6 text-black sm:h-5 sm:w-5" />
      </div>
    </div>
  );
};

export default Hero;
