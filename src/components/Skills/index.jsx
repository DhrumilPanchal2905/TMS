'use client';

import React from "react";
import ProgressBar from "@/chip/ProgressBar"
import SkillBox from "@/chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { FaReact } from "react-icons/fa"; 
import { TbBrandThreejs } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";  
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            {}
            {}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={100} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={100} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={90}
                />
                <ProgressBar
                  logo={<SiTypescript />}
                  name={"Typescript"}
                  value={90}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={90} />
                <ProgressBar
                  logo={<TbBrandNextjs />} 
                  name={"Next Js"}
                  value={90}
                /> 
                <ProgressBar logo={<TbBrandThreejs />} name={"Three Js"} value={65} />
              </div>
            </div>
          </div>
          {}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <GrCode/>
                }
                black={"black"}
                white={"white"}
                skill={"React / Next"}
              />
              {}
            </div>
          </div>
        </div>

        {}
        {}
      </div>
    </div>
  );
};

export default Skills;