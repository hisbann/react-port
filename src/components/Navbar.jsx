import React, { useState } from "react";
import CloseIcon from "../icon/CloseIcon";
import Hamburger from "../icon/hamburger";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [Navi, setNavi] = useState(false);
  

  const changeBgColorNav = () => {
    if (window.scrollY >= 150) {
      setNavi(true);
    } else {
      setNavi(false);
    }
  };

  window.addEventListener("scroll", changeBgColorNav);

  return (
    <div className={Navi ? "fixed drop__shadow bg-slate-800 h-20 drop-shadow-2xl top-0 bg-opacity-40 backdrop-blur-lg z-[999]" : "fixed h-20 bg-slate-800 backdrop-blur-lg mbl:backdrop-blur-lg drop-shadow-2xl top-0 z-[999]"}>
      <div className="w-screen drop-shadow-2xl h-20 flex justify-between items-center ml px-10 text-white  ">
        <h2 className="text-4xl mbl:text-2xl font-rubik font-bold ">Hisban</h2>
        <ul className="flex gap-16 mbl:hidden md:flex ">
          <li className="mr-2 hover:text-sky-400 font-openSans font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2 hover:text-sky-400 font-openSans font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-2 hover:text-sky-400 font-openSans font-semibold">Contact</li>
          <li className="mr-2 hover:text-sky-400 font-openSans font-semibold">Services</li>
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Hamburger /> : <CloseIcon />}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "translate-x-[100%] z-[99999] transition-all duration-300 w-screen h-screen ease-in-out opacity-0"
            : " sm:hidden z-[99999] mbl:translate-x-[0%] relative bg-slate-800 text-white w-screen h-screen  transition-all duration-300 ease-in-out "
        }
      >
        <li
          className="p-5 relative border-b-[1px] hover:text-slate-900 hover:font-bold font-openSans font-semibold before:scale-x-0 before:-z-50 border-gray-500  before:content-[''] before:absolute before:hover:scale-x-100 before:origin-left before:transition  ease-in-outduration-300
         before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-tr  before:bg-sky-400"
        >
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li
          className="p-5 relative border-b-[1px] hover:text-black hover:font-semibold font-openSans font-semibold  before:scale-x-0 before:-z-50 border-gray-500  before:content-[''] before:absolute before:hover:scale-x-100 before:origin-left before:transition  ease-in-outduration-300
         before:w-full before:h-full before:left-0 before:top-0  before:bg-gradient-to-tr  before:bg-sky-400"
        >
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li
          className="p-5 relative font-openSans border-b-[1px] hover:text-slate-900 hover:font-semibold font-semibold  before:scale-x-0 before:-z-50 border-gray-500  before:content-[''] before:absolute before:hover:scale-x-100 before:origin-left before:transition  ease-in-outduration-300
         before:w-full before:h-full before:left-0 before:top-0  before:bg-gradient-to-tr  before:bg-sky-400"
        >
          Contact
        </li>
        <li
          className="p-5 relative border-b-[1px] hover:text-slate-900 hover:font-semibold font-openSans font-semibold  before:scale-x-0 before:-z-50 border-gray-500  before:content-[''] before:absolute before:hover:scale-x-100 before:origin-left before:transition  ease-in-outduration-300
         before:w-full before:h-full before:left-0 before:top-0  before:bg-gradient-to-tr before:bg-sky-400"
        >
          Services
        </li>
        {/* <li>
          <picture>
            <div className="pl-6 pt-4">
            <img src={hisban} className="w-16 rounded-full" alt="" />
            </div>
          </picture>
        </li> */}
        <div className="flex justify-center items-center ">
        <h1 className="font-roboto font-medium text-center border-b-sky-500 border-b-2 w-[100px] pt-10">Social Media</h1>
        </div>
        <li className="flex w-full">
          <div className="item-center justify-center w-full flex pt-4">
              <AiFillGithub size={70} />
              <AiFillYoutube size={70} />
              <AiFillInstagram size={70} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
