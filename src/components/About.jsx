import React from "react";
import { Tab } from "@headlessui/react";
import Saly from "../assets/Saly-10.png";
import classNames from "classnames";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import Css from "../assets/LogoSvg/css/css.png";
import Sass from "../assets/LogoSvg/Sass/Sass.svg";
import tailwind from "../assets/LogoSvg/tailwindcss/tailwindcss.svg";
import bootstrap from "../assets/LogoSvg/Bootstrap/bootstrap.svg";
import Javasc from "../assets/LogoSvg/javascript/Javascript.svg";
import reactjs from "../assets/LogoSvg/react/reactjsicon.svg";
import php from "../assets/LogoSvg/php/php-icon.svg";

const About = () => {

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft -= 500; 
  }
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft += 500; 
  }

  return (
    <div className="w-full h-screen md:pt-36 mbl:pt-16 bg-zinc-300 relative">
      <div className="pt-16 md:pt-0 ">
        <h1 className="pl-36 md:pl-36 mbl:text-center mbl:pl-0 font-rubik text-2xl font-bold md:text-left md:text-5xl "> About me</h1>
        <div>
          <Tab.Group>
            <Tab.List className={"space-x-2 text-center md:space-x-5 mbl:pt-2 md:text-left pt-2 md:pt-10 md:pl-36"}>
              <Tab className={({ selected }) => classNames("Tab__experience outline-none border-none bg-gray-400 px-2 p-1 font-poppins font-semibold rounded-md", selected ? "bg-slate-900 text-gray-400" : "")}>Experience</Tab>
              <Tab className={({ selected }) => classNames("Tab__experience outline-none border-none bg-gray-400 px-2 p-1 font-poppins font-semibold rounded-md", selected ? "bg-slate-900 text-gray-400" : "")}>Skill</Tab>
              <Tab className={({ selected }) => classNames("Tab__experience outline-none border-none bg-gray-400 px-2 p-1 font-poppins font-semibold rounded-md", selected ? "bg-slate-900 text-gray-400" : "")}>Achievement</Tab>
            </Tab.List>
            <Tab.Panels className={"md:pl-36 "}>
              <Tab.Panel className={""}>
                <div className=" h-full">
                  <div className="w-2/5 mbl:w-[320px] md:w-2/5 md:h-3/5 h-3/5">
                    <h1 className="pt-10 font-openSans text-2xl text-center font-[700] ">My Experience</h1>
                    <div className="text-center w-screen">
                      <p className="text-justify mbl:p-10 mbl:pt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore ipsam incidunt architecto ratione voluptatum, praesentium aut libero animi et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                        voluptatibus omnis hic ipsum quas ducimus at, officiis maiores molestiae quibusdam id eius illum laboriosam, unde asperiores harum architecto. Tempore, minus.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mbl:hidden md:flex">
                    <img src={Saly} alt="" className="absolute md:bottom-0 mbl:bottom-0 mbl:w-[340px]  md:right-0 bottom-[137px] md:w-[600px] sm:w-40" />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className={""}>
                <div className=" h-full">
                  <div className="w-screen md:w-2/5 md:h-3/5 h-3/5">
                    <h1 className="pt-10 font-openSans text-2xl text-center w-screen font-[700] ">My Skill</h1>
                    <div className="text-center flex mt-10 flex-col w-screen ">
                      <div className="flex flex-wrap items-center justify-around">
                        <div id="slider" className="flex w-screen pb-3 shadow-lg items-center overflow-x-scroll scroll-smooth scrollbar-hide">
                          
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={Javasc} className="opacity-20 w-52 " alt="" />
                              <img src={Javasc} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">JavaScript</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={reactjs} className="opacity-20 w-52 " alt="" />
                              <img src={reactjs} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">React</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={tailwind} className="opacity-20 w-52 " alt="" />
                              <img src={tailwind} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">TailWindCss</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={bootstrap} className="opacity-20 w-52 " alt="" />
                              <img src={bootstrap} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">Bootstrap</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={Css} className="opacity-20 w-44 " alt="" />
                              <img src={Css} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">CSS</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={Sass} className="opacity-20 w-52 " alt="" />
                              <img src={Sass} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">SASS</p>
                          </div>
                          <div className="relative w-screen h-full flex flex-col">
                            <div className="relative w-screen flex flex-col justify-center items-center">
                              <img src={php} className="opacity-20 w-52 " alt="" />
                              <img src={php} className="absolute w-36 bottom-3 " alt="" />
                            </div>
                            <p className=" font-openSans font-semibold mbl:pt-3 mbl2:pt-3">Php</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-32 mt-10 justify-between">
                        <HiArrowNarrowLeft onClick={slideLeft} className="text-xl text-gray-600 hover:text-gray-900 hover:scale-110" />
                        <FiMoreHorizontal className="text-xl text-gray-600 hover:text-gray-900 hover:scale-110" />
                        <HiArrowNarrowRight onClick={slideRight} className="text-xl text-gray-600 hover:text-gray-900 hover:scale-110" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className={""}>
                <div className=" h-full">
                  <div className="w-2/5 mbl:w-[320px] md:w-2/5 md:h-3/5 h-3/5">
                    <h1 className="pt-10 font-openSans text-2xl text-center font-[700] ">My Achievement</h1>
                    <div className="text-center w-screen">
                      <p className="text-justify mbl:p-10 mbl:pt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore ipsam incidunt architecto ratione voluptatum, praesentium aut libero animi et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                        voluptatibus omnis hic ipsum quas ducimus at, officiis maiores molestiae quibusdam id eius illum laboriosam, unde asperiores harum architecto. Tempore, minus.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mbl:hidden md:flex">
                    <img src={Saly} alt="" className="absolute md:bottom-0 mbl:bottom-0 mbl:w-[340px]  md:right-0 bottom-[137px] md:w-[600px] sm:w-40" />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default About;
