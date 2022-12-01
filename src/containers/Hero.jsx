import React from "react";
import { BlackLine } from "../components/BlackLine/BlackLine";
import "../components/Hero/background.css";
import Car from "../components/Hero/Car";

export const Hero = () => {
  return (
    <div>
      <BlackLine />
      <section className="flex md:flex-row flex-col bg-primary sm:py-16 py-6 background">
        <Car />
      </section>
    </div>
  );
};
