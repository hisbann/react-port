import React from "react";
import Typewriter from "typewriter-effect";
import Hero3d from "../assets/CryptoFluff_0075-removebg.png";

const Home = () => {
  return (
    <div className="overflow-hidden border-none outline-none">
      <div className="absolute w-full h-screen -z-[100]"> </div>
      <div className=" bg-slate-900 w-full h-screen flex justify-center items-center md:justify-start md:pl-16  ">
        <div className="z-[99] justify-center flex mbl:pt-36 md:pt-16 flex-col items-center overflow-hidden">
          <h1 className="text-7xl md:text-6xl mbl:text-3xl text-gray-50 font-openSans font-[700]">
            Hi, I'm <span className=" text-red-500 animate__color">Hisban Pahri</span>
          </h1>
          <div className="text-2xl md:text-4xl  font-openSans font-bold text-gray-300">
            <Typewriter
              options={{
                strings: ["Front End Developer", "An Esports Enthusiast"],
                autoStart: true,
                loop: true,
                
              }}
            />
          </div>
          <img src={Hero3d} className="z-[99] w-[350px] md:hidden md:w-[500px] animate__bon " alt="" />
          <div className="top-32 animate-ping opacity-40 right-56 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <div className="top-64 animate-ping opacity-40 right-24 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <div className="top-22 animate-ping opacity-40 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <div className="top-52 animate-ping opacity-40 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <div className="bottom-64 animate-ping opacity-40 left-32 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <div className="bottom-32 animate-ping opacity-40 right-32 absolute w-5 h-5 rounded-full bg-transparent border-sky-400 border-2"></div>
          <img src={Hero3d} className="z-[99] w-[350px] mbl:hidden md:flex md:w-[500px] animate__bon absolute right-36  bottom-36 " alt="" />
        
        </div>
      </div>
      <div className="bg__gradient absolute w-[40%] h-[40%] top-0 z-[99]"></div>
      
      {/* <img src={Facebbk} className="absolute z-[999] w-44 bottom-0" alt="" />
      <img src={linkin} className="absolute z-[999] w-44 top-24" alt="" />
      <img src={Wa} className="absolute z-[999] w-44 bottom-28 right-0" alt="" />
      <img src={Instgrm} className="absolute z-[999] w-44 bottom-28" alt="" />
      <img src={Tiktok} className="absolute z-[999] w-44 bottom-0 right-0" alt="" /> */}
      <div className="w-full absolute bottom-0 h-4 bg-sky-400 blur-xl"></div>
      <div className="w-3 absolute left-0 bottom-0 h-screen bg-sky-400 blur-xl"></div>
      <div className="w-3 absolute right-0 bottom-0 h-screen bg-sky-400 blur-xl"></div>
    </div>
  );
};

export default Home;
