import React from "react";
import { HiArrowNarrowRight, HiHand } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import "../index.css";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen color-content">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl group sm:text-6xl font-bold text-[#1c1c21]">
          <HiHand className="origin-bottom -rotate-12" /> Hi, I'm Anurag
        </h1>

         <h2 className="text-2xl sm:text-5xl type_css font-bold text-[#6a62d5]">
          <span class="typed-text text-[#6a62d5]-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Programmer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Learner...")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Programmer , Developer & Learner...")
                  .start();
              }}
            />
          </span>{" "}
        </h2>

        <p className="text-[#262628]  text-1xl py-4 max-w-[700px]">
          I’m a student who has a passion for enjoying the process of turning
          ideas into reality using creative solutions. I’m always curious about
          learning new skills, tools, and concepts. In addition to web
          development, I have a keen interest in Data Structure & Algorithm with
          problem-solving skills, database management/development, and
          Object-Oriented programming using C++ with Computer Networks and
          Software Engineering.
        </p>
        <div>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-whote group px-6 py-3 my-2 flex border-2 border-zinc-900 text-[#020205] items-center hover:bg-[#6a62d5] ">
                view more
                <span className="group-hover:rotate-90  duration-200">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </li>
          
        
       
        </div>
        </div>
    </div>
  );
};

export default Home;
