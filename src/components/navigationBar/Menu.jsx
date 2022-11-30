import React from "react";
import NavBar from "./NavBar/NavBar";
import {BlackLine} from "../BlackLine/BlackLine";

export default function Menu() {
  return (
    <div className="container min-w-full h-24 bg-primary">
      <NavBar />
        <BlackLine />
    </div>
  );
}
