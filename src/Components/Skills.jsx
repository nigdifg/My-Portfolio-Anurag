import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
import clang from '../assests/clang.png';
import GitHub from '../assests/github.png';
import Bootstrap from '../assests/Bootstrap.png';
import C_Logo from '../assests/C_Logo.png';

const Skills = () => {
  return (
    <div name="skills" className='glow2 w-full h-screen color-content text-white'>
      <Zoom>
      <div className='max-w-4xl mx-auto py-20 px-4'>
        <Fade bottom cascade>
        <h2 className='text-4xl font-bold mb-4 text-[#0a192f] '>Skills</h2>
        <p className='text-lg mb-8 text-[#0a192f]'>These are the technologies I've worked with</p>
        </Fade>
        <div className='grid glow2 grid-cols-2 sm:grid-cols-4 glass gap-8'>
         <Fade bottom >
          <Zoom><SkillCard image={HTML} alt='HTML' title='HTML' /></Zoom>
          <Zoom><SkillCard image={CSS} alt='CSS' title='CSS' /></Zoom>
         <Zoom> <SkillCard image={JavaScript} alt='JavaScript' title='JavaScript' /></Zoom>
         <Zoom> <SkillCard image={ReactImg} alt='React' title='React' /></Zoom>
         <Zoom> <SkillCard image={GitHub} alt='GitHub' title='GitHub' /></Zoom>
         <Zoom> <SkillCard image={Node} alt='Node.js' title='Node.js' /></Zoom>
          <Zoom><SkillCard image={Bootstrap} alt='Bootstrap' title='Bootstrap' /></Zoom>
         <Zoom> <SkillCard image={clang} alt='C++' title='C++' /></Zoom>
         <Zoom> <SkillCard image={C_Logo} alt='C' title='C' /></Zoom>
          </Fade>
        </div>
      </div>
    </Zoom>
    </div>
  );
};

const SkillCard = ({ image, alt, title }) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg glass transition duration-300'>
      <img className='w-20 mb-4' src={image} alt={alt} />
      <p className='text-lg text-[#0a192f] font-semibold'>{title}</p>
    </div>
  );
};

export default Skills;



// import React from 'react';

// import HTML from '../assests/html.png';
// import CSS from '../assests/css.png';
// import JavaScript from '../assests/javascript.png';
// import ReactImg from '../assests/react.png';
// import Node from '../assests/node.png';
// import clang from '../assests/clang.png';
// import GitHub from '../assests/github.png';
// import Bootstrap from '../assests/Bootstrap.png';
// import C_Logo from '../assests/C_Logo.png';

// const Skills = () => {
//   return (
//     <div name='skills' className='w-full h-screen color-content text-[#0a192f]'>
      
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//           <div>
//               <p className='text-4xl font-bold inline border-b-4 border-[#6a62d5] '>Skills</p>
//               <p className='py-1'> These are the technologies I've worked with</p>
//           </div>

//           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
//                   <p className='my-4'>HTML</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
//                   <p className='my-4'>CSS</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
//                   <p className='my-4'>JAVASCRIPT</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
//                   <p className='my-4'>REACT</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
//                   <p className='my-4'>GITHUB</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
//                   <p className='my-4'>NODE JS</p>
//               </div>
             
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
//                   <p className='my-4'>BOOTSTRAP</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={clang} alt="HTML icon" />
//                   <p className='my-4'>c++</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={C_Logo} alt="HTML icon" />
//                   <p className='my-4'>C</p>
//               </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;