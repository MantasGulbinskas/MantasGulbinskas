import React from "react";

export const HeadingTitle = (props) => {
    return(
        <>
        <h2 className='text-center  text-[40px] capitalize font-raleway'>{props.title}</h2>
    <hr className='h-0.5 bg-primary md:w-4/12 w-4/12 max-sm:w-8/12 m-auto'/>
    <p className='text-center font-raleway mt-4'>{props.description}</p>
        </>
    )
}