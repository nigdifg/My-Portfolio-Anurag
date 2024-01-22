import React from "react";
import { HiArrowNarrowRight, HiHand } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import "../index.css";

const Home = () => {
  return (
    <div>
      <div name="home" className="h-screen bg-grey-100">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <Fade down>
            <div>
              <h1 className="text-4xl group sm:text-6xl font-bold text-black">
                <HiHand className="origin-bottom -rotate-12" /> Hi, I'm Anurag
              </h1>

              <h2 className="text-2xl sm:text-5xl font-bold text-blue-600">
                <span className="typed-text text-blue-600">
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
              <Fade left>
              <p className="text-gray-700 text-1xl py-4 max-w-[700px]">
                I’m a student who has a passion for enjoying the process of turning
                ideas into reality using creative solutions. I’m always curious about
                learning new skills, tools, and concepts. In addition to web
                development, I have a keen interest in Data Structure & Algorithm with
                problem-solving skills, database management/development, and
                Object-Oriented programming using C++ with Computer Networks and
                Software Engineering.
              </p>
              </Fade>
            </div>
          </Fade>
          <Fade top>
            <div>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  <button className=" group px-6 py-3 my-2 flex border-2 border-blue-600 text-black items-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    view more
                    <span className="group-hover:rotate-90  duration-200">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </Link>
              </li>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;