import React from "react";
import '../components/AboutService/aboutService.css'
import {GreenBtn} from "../components/Buttons/GreenBtn";
import {HeadingTitle} from "../components/HeadingTitle/HeadingTitle";

export default function AboutService() {

    return(
        <section className='mt-16 relative'>
            <HeadingTitle title={'about our car service'} />
            <p style={{height: '330px'}} className='green-line' />
            <p className='blue-line' />
            <div className='service-background px-[40px] py-[40px] mt-24  '>
                <div className=' border max-w-[1020px] rounded-3xl bg-white flex flex-wrap flex-row justify-center  '>
                    <h2 className='text-[30px] text-center md:mt-16 '>Dolor sit amet, consectetur adipiscing elit, </h2>
                    <p className='text-center max-sm:text-[10px] align-center text-[20px]  md:px-36 mb-20'>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <GreenBtn styles={'capitalize'} name={'about more'}/>
                </div>
            </div>

        </section>
    )
}