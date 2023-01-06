
import React from 'react';
import Hero from '../assests/Hero.jpeg';
const About = () => {
  return (
    <div name='about' className='color-content w-full h-screen text-[#0a192f] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-3'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#6a62d5]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-0'>
            <div className='sm:text-left text-l font-bold'>
              <p>Hi there! My name is Anurag,I have always been passionate about solving provlems and learning new technologies.<br></br>
              I am currently pursuing my Btech degree in Information Technology from KIIT UNIVERSITY and now I am constantly striving to learn and grow, both personally and professionally.
              <br></br>
              In my professional life, I am known for my Problem Solving skills in software  and Enthusiastic learner. I am a hard worker and always strive to go above and beyond for my clients/colleagues.
              <br></br>
              Overall, I am a driven and dedicated individual with a love for Problem solving and a desire to make a positive impact in my field. 
              <br></br>
              My resume is included for your consideration.
              Thank you for taking the time to learn more about me!
                </p>
            </div>
            <div>
            <div className='flex flex-wrap justify-center'>
          <img
            src={Hero}
            alt="my profile"
            className="shadow-lg rounded-2xl flex flex-wrap border-cyan-400 mx-auto w-40 md:w-1/2 sm:w-40"
          />
        </div> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

