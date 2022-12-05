import React from "react";
import CarImg from "../../assets/images/car-repair.png";

export default function Car() {
  return (
    <div className=" max-sm:pt-16 max-sm:hidden">
      <img src={CarImg} alt="car-repair" className="max-w-xl max-sm:max-w-[150px] max-md:max-w-[300px] max-xl:max-w-[350px] mr-10"/>
    </div>
  );
}
