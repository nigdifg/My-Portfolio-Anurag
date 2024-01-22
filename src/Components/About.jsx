import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import React from 'react';
import Hero from '../assests/Hero.jpeg';
import "../index.css";
const About = () => {
  return (
    <div name='about' className='color-content w-full h-screen text-[#0a192f] '>
      <Zoom>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-3'>
          <div className='sm:text-right pb-8 pl-4'>
            <Slide left>
            <p className='text-4xl font-bold inline border-b-4 border-[#6a62d5]'>
              About
            </p>
            </Slide>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] glass w-full grid sm:grid-cols-2 gap-0'>
          <Fade right>
          <div className='sm:text-left text-l font-bold'>
              <p>
            Hi there! My name is Anurag, and I am an aspiring problem solver with a deep passion for learning and embracing new technologies. I am currently pursuing my Btech degree in Information Technology from KIIT UNIVERSITY and continuously strive to enhance my skills and knowledge, both personally and professionally.

            Throughout my professional journey, I have gained recognition for my exceptional problem-solving abilities in the realm of software development. I approach challenges with enthusiasm and determination, always seeking innovative solutions to complex issues. My dedication and work ethic have consistently driven me to go above and beyond to meet the needs of my clients and colleagues.

            As an enthusiastic learner, I am always eager to explore new technologies and stay updated with the latest advancements in my field. I believe in the power of continuous growth and development, and I am committed to making a positive impact in the industry.

            I have attached my resume for your consideration, and I sincerely appreciate your time in getting to know more about me. I look forward to the opportunity to discuss how I can contribute my skills and passion to your team. Thank you.
              </p>
          </div>
          </Fade>
            <div>
            <div className='flex flex-wrap justify-center'>
            <Slide right>
            <img
            src={Hero}
            alt="my profile"
            className="shadow-lg glow rounded-2xl flex flex-wrap border-cyan-400 w-64 h-64 md:w-96 md:h-96 sm:w-40 sm:h-40"
            />
            </Slide>
          {/* <img
            src={Hero}
            alt="my profile"
            className="shadow-lg glow rounded-2xl flex flex-wrap border-cyan-400  w-41 md:w-1/2 sm:w-40"
          /> */}
        </div> 
            </div>
          </div>
      </div>
      </Zoom>
    </div>
  );
};

export default About;

