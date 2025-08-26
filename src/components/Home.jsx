import React from 'react'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div  id="home" className='max-w-screen-2xl container px-4 mx-auto md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        
        {/* Left Section */}
        <div className='md:w-1/2 mt-12 md:mt-24 '>
          <h2 className='text-xl font-semibold'>"Welcome to My Portfolio"</h2>
          
          <div className='flex space-x-2 text-2xl md:text-3xl font-bold flex-wrap'>
            <h1>Hello, I am a</h1>
            <ReactTyped
            className='text-green-600 '
              strings={["Web Developer", "MERN Stack Learner", "UI Designer"]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </div>

          <br />

          <p className='text-sm md:text-md text-justify font-sans'>
            "Welcome to my portfolio! I am a dedicated and enthusiastic developer 
            who enjoys creating modern and responsive websites. I am always eager 
            to learn new things and improve my work. This portfolio is a reflection 
            of my journey and the projects I have worked on."
          </p>

          <div className='py-8'>
            <h2 className='font-bold text-xl flex justify-end'>
              Currently Working on !!!
            </h2>
            <div className="flex space-x-4 items-center justify-end mt-6">
              <SiMongodb size={40} color="#4DB33D" />
              <SiExpress size={40} color="#000000" />
              <SiReact size={40} color="#61DAFB" />
              <SiNodedotjs size={40} color="#339933" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='md:w-1/2 flex justify-center items-center'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile"
            className="w-72 h-72 rounded-full border-4 border-blue-500"
          />
        </div>
      </div>
      <br />
     
    </div>
  )
}

export default Home
