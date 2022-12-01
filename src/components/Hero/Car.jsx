import React from "react";
import CarImg from "../../assets/images/car-repair.png";

export default function Car() {
  return (
    <div className="max-w-[150px] mx-auto md:max-w-xl sm::flex sm:justify-end">
      <img src={CarImg} alt="car-repair" className="" />
    </div>
  );
}
