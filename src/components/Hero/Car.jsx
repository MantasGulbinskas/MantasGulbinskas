import React from "react";
import CarImg from "../../assets/images/car-repair.png";

export default function Car() {
  return (
    <div className="flex-none max-sm:pt-16">
      <img src={CarImg} alt="car-repair" className="max-w-xl max-sm:max-w-[200px] max-md:max-w-[300px] max-xl:max-w-[350px] ml- mr-10"/>
    </div>
  );
}
