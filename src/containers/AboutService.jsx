import React from "react";
import '../components/AboutService/aboutService.css'

export default function AboutService() {

    return(
        <section className='mt-16'>
            <p className='green-line' />
            <h2 className='text-center  text-[40px] capitalize font-raleway'>about our car service</h2>
            <hr className='h-0.5 bg-primary md:w-4/12 w-4/12 max-sm:w-8/12 m-auto'/>
            <p className='blue-line' />
            <div className=' service-background px-[40px] py-[40px] mt-24 '>
                <div className=' border  rounded-3xl bg-white flex flex-wrap flex-row justify-center '>
                    <h2 className='text-[30px] text-center mt-16 '>Dolor sit amet, consectetur adipiscing elit, </h2>
                    <p className='text-center align-center text-[20px] mt-10 px-10 mb-20'>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <button className='bg-secondary text-white text-xl rounded-2xl capitalize w-48 h-12 mt-16 mb-20 '>about more</button>
                </div>
            </div>
        </section>
    )
}