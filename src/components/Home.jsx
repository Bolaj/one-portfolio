import React from 'react'
import HeroImage from "../assets/heroTimi2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-fulll bg-gradient-to-b from-black to-gray-800 via-black">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                 <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I am a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quod at minima nesciunt nulla culpa qui cum rerum deleniti laudantium!</p>
                <div>
                    <button className='group text-white px-6 py-3 my-2 w-fit flex text-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1 '/> 
                        </span>
                    </button> 
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile"  className='rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
} 

export default Home