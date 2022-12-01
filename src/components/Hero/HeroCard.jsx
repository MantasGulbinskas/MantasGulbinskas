import React from "react";
import data from '../../Data/data.json'

export const HeroCard = () => {
    const hero = data.hero

    return (
        <>
            {hero.map((item) => {
                return (
                    <div className="font-raleway uppercase ml-20 container flex-1" key={item.id}>
                        <h2 className="text-[103px] max-sm:text-[30px] max-md:text-[20px] max-xl:text-[70px] text-secondary">{item.title}</h2>
                        <p className="text-[69px] max-sm:text-[30px] max-md:text-[20px] max-xl:text-[70px] text-white">{item.h2}</p>
                        <p className="text-white text-[17px] max-sm:text-[10px] max-md:text-[10px] max-xl:text-[20px] md:w-9/12  xl:w-1/2 mb-10">{item.description}</p>
                       <button className=' bg-white uppercase py-3 px-10 mr-10'>more info</button>
                        <button className='text-white uppercase bg-black py-3 px-10'>contacts us</button>

                    </div>
                )
            })}
        </>
    )
}