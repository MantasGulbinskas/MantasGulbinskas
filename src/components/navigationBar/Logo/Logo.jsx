import React from "react";
import "./Logo.css";
import logoImg from "./logo.png";

export default function Logo() {
  return (
    <div className="flex ml-10 items-center justify-start">
      <img src={logoImg} alt="logo" />
      <h2 className="text-[30px] ml-5 text-white textLogo font-raleway">mical</h2>
    </div>
  );
}
