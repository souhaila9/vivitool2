import React from "react";
import HeroSection from "../assets/HeroSection.webp";
import HeroSection1 from "../assets/HeroSection1.webp";
import HandHeart from "../assets/HandHeart.svg";

import { motion } from "framer-motion";

function FirstSection() {
  return (
    <div className="gap-4 py-4 xl:pr-40 xl:pl-20 ">
      <div className="flex flex-col xl:flex-row items-center justify-between  h-full ">
        <div className=" xl:x-[48%] text-center xl:text-left md:pl-20">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="font-bold text-center md:text-left md:text-5xl text-4xl	text-Dark_blue pb-4"
          >
            {" "}
            LE RECRUTEMENT <br></br>AU-DELÀ DU CV!{" "}
          </motion.h1>
          <motion.p
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg	text-Dark_blue	"
          >
            <span className="text-golden "> Job </span>
            <span className="text-pink ">For </span>
            <span className="text-green ">Student </span>, c’est l’application{" "}
            <br></br> qui révèle le potentiel de l’étudiant au-delà <br></br>de
            son CV en faisant ressortir <br></br>ses valeurs et softskills.
          </motion.p>
        </div>

        <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex max-w-[692px] flex-col justify-center items-stretch pl-6 max-md:pl-5">
            <div className="relative">

              <motion.img
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                src={HeroSection}
                alt="HeroSection"
                className="h-full w-full"
              />
              {/* Remove opening and closing tags */}
              <motion.div
                 initial={{ x: 400, y: 100 }}
                 animate ={{x:-100}}
                transition={{ duration :0.5,}}
                className="absolute top-20"
              >
                <img className="h-14	w-14	" src={HeroSection1} />
                <div className="flex-col  ">
                  <div className="text-sm font-bold	"> Sophie Martin</div>
                  <div className="text-xs	">
                    {" "}
                    J'ai apprécié la plateforme très <br></br>intuitive.
                  </div>
                </div>
              </motion.div>

              <motion.div
                 initial={{x:100, y :10}}
                 animate ={{x:200}}
                transition={{ duration: 0.5 }}
                className="absolute button-20 right-90		 "
                
              >
                <div className=" flex items-center justify-center gap-4 bg-white p-4 rounded-2xl border	border-yelow"> 
                <img className="h-12	w-12	" src={HandHeart} />
                <div className="flex-col  ">
                  <span className="text-sm font-bold text-golden text-start	">
                    {" "}
                    +1000 étudiants
                  </span> <br></br>
                  <span className="text-xs text-golden	">
                    {" "}
                    nous font confiance.
                  </span>
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
