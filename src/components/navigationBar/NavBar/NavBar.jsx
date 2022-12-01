import React, { useState } from "react";
import Logo from "../Logo/Logo";
import menu from "../../../assets/images/menu.svg";
import close from "../../../assets/images/close.svg";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Logo />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 capitalize">
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="#home">home</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="#about">about</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="#company">company</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="#furnitures">furnitures</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="#contactus">contact us</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
        <img
          src={toggle ? close : menu}
          alt="hamburgerMenu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <a href="#home">home</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <a href="#about">about</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <a href="#company">company</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <a href="#furnitures">furnitures</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mr-10">
              <a href="#contactus">contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
