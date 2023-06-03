import React,{useState} from 'react';
import '../index.css';
import {FaBars,FaTimes,FaGithub,FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {

const[nav,setNav] = useState(false)
const handleclick = () => setNav(!nav)

  return (
    <div className='fixed text-2xl  w-full h-[80px] flex justify-around items-center nav-color px-4 bg-[#9ec7d7f4] text-[#0a192f]'>

<div>
  <ul className='hidden md:flex '>
    <li className='text_nav'>
    <Link   to="home" smooth={true} duration={500} >
         Home
        </Link>
    </li>
    {/* <li>Home</li> */}
    <li className='text_nav'> <Link   to="about" smooth={true} duration={500} >
         About
        </Link></li>
    <li className='text_nav'> <Link   to="skills" smooth={true} duration={500} >
         Skills
        </Link></li>
    <li className='text_nav'> <Link   to="work" smooth={true} duration={500} >
         Work
        </Link></li>
    <li className='text_nav'> <Link   to="contact" smooth={true} duration={500} >
         Contact
        </Link></li>

  </ul>
</div>
<div onClick={handleclick} className='md:hidden z-10'>
  {!nav ? <FaBars /> : <FaTimes />}
</div>

{/* moblie view */}

  <ul className={!nav ? "hidden" :'absolute top-0 left-0 w-full h-screen color-content  hide_b flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'> 
    <Link onClick={handleclick} to="home" smooth={true} duration={500} >
         Home
        </Link></li>
    <li className='py-6 text-4xl'>
       <Link onClick={handleclick}  to="about" smooth={true} duration={500} >
         ABOUT
        </Link></li>
    <li className='py-6 text-4xl'> 
    <Link onClick={handleclick}   to="skills" smooth={true} duration={500} >
         SKILLS
        </Link></li>
    <li className='py-6 text-4xl'>
       <Link onClick={handleclick}   to="work" smooth={true} duration={500} >
         WORK
        </Link></li>
    <li className='py-6 text-4xl'> 
    <Link onClick={handleclick}   to="contact" smooth={true} duration={500} >
         CONTACT
        </Link></li>
  </ul>

{/* social-icons */}
  <div className='hidden  lg:flex fixed flex-col top-[35%] left-0'>

<ul>
  <li className='glass w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
    <a className='flex justify-between items-center w-full text-grey-300'  href="https://www.linkedin.com/in/anurag-91a137203/ " target="_blank">
      LinkedIn<FaLinkedin size={30}/>
    </a>
  </li>
  <li className='glass  w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#615e5e]'>
    <a className='flex justify-between items-center w-full text-grey-300'  href="https://github.com/nigdifg" target="_blank">
      GitHub <FaGithub size={30}/>
    </a>
  </li>
  <li className='glass w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aa332f]'>
  <a href="mailto:maurya1985anurag@gmail.com" target="_blank" className='flex justify-between items-center w-full text-grey-300'>
    Email <HiOutlineMail size={30}/>
  </a>
</li>
  {/* <li className='glass w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aa332f]'>
    <a action="maurya1985anurag@gmail.com" className='flex justify-between items-center w-full text-grey-300' href = "mailto:maurya1985anurag@gmail.com">
      Email <HiOutlineMail size={30}/>
    </a>
  </li> */}
  <li className='glass  w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4d88ff]'>
    <a href="https://drive.google.com/file/d/1IJDnvMcNXomfcxFCsX3vfUbuDo76xjTw/view" target="_blank" download className='flex justify-between items-center w-full text-grey-300'>
      Resume<BsFillPersonLinesFill size={30}/>
    </a>
  </li>
</ul>
</div>
</div>

    
    
  )
}
export default Navbar