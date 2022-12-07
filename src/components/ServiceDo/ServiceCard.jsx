import React from "react";
import data from '../../Data/data.json'
import {GreenBtn} from "../Buttons/GreenBtn";
import {HeadingTitle} from "../HeadingTitle/HeadingTitle";
export default function ServiceCard() {
    const serviceDo = data.WhatWeDo
    return (
        <section className="mt-36 flex items-center flex-col">
            <HeadingTitle title={'what we do'} description={'It is a long established fact that a reader will be distracted by the '}/>
            <div className=" grid grid-cols-2 mt-10 gap-6 max-sm:grid-cols-1">
                {serviceDo?.map((index) => {
                    return(
                        <div className='relative' key={index.id}>
                    <img className=' w-full max-h-96 max-sm:h-48 md:h-96 rounded-3xl cursor-pointer block opacity-100' src={require('../../assets/images/WahtWeDo/' + index.image + '.png') } alt={index.title}/>
                            <div className='w-full h-full opacity-0 rounded-3xl absolute left-0 top-0 flex flex-col justify-center items-center cursor-pointer hover:bg-black hover:opacity-70'>
                                <h2 className='text-white text-[30px] uppercase font-raleway'>{index.title}</h2>
                                <p className='text-secondary uppercase'>{index.description}</p>
                            </div>
                        </div>
                )
                })}
            </div>
            <GreenBtn name={'see more'} />
        </section>
    )
}