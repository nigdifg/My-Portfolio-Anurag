import React from "react";
import { data } from "../data/data.js";
import {Fade,Slide,Zoom} from "react-awesome-reveal";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen color-content text-[#0a192f] p-8">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center w-full h-full">
        <Fade down>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#0a192f] border-[#6a62d5] hover:border-blue-500 transition-colors duration-200">
            Work
          </p>
          <p className="py-1 text-lg">Check out some of my recent work</p>
        </div>
        </Fade>
        <Zoom>
        <div className="grid glow2 glass sm:grid-cols-2 md:grid-cols-4 gap-4">
          {project.map((item, index) => (
            <Slide top>
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-105 transition-transform duration-200"
            >
              <Zoom top>
              <div className="opacity-0 group-hover:opacity-100">
                <Zoom>
                <span className="text-2xl font-bold text-white tracking-wider hover:text-blue-500 transition-colors duration-200">
                  {item.name}
                </span>
                </Zoom>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-500 hover:text-white transition-colors duration-200"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-500 hover:text-white transition-colors duration-200"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
              </Zoom>
            </div>
            </Slide>
          ))}
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Work;