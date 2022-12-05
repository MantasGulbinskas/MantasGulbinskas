import React from "react";
import data from '../../Data/data.json'
export default function WorkServicesBar() {
    const WorkServices = data.WorkServices;
    console.log(WorkServices)
      return(
          <div className='flex justify-center sm:space-x-10 sm:relative sm:bottom-14 font-raleway  max-sm:flex-col' >
              {WorkServices.map((index) => {
                  return(
                      <div className='border-black bg-white max-w-[320px] max-h-[250px] max-sm:max-w-fit flex flex-col items-center shadow-sm  shadow-black-500/40 max-sm:my-10' key={index.id}>
                          <h2 className='uppercase text-[18px]'>{index.title}</h2>
                          <img src={require('../../assets/images/WorkServices/' + index.image + '.png')} alt={index.title}/>
                          <p className='px-10 text-center text-[12px]'>{index.description}</p>
                      </div>
                  )
              })}
          </div>
      )
}