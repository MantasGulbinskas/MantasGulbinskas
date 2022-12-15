import React from "react";
import {GreenBtn} from "../Buttons/GreenBtn";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMaskFace} from '@fortawesome/free-solid-svg-icons'

import locations from '../../assets/images/locations.png';
import call from '../../assets/images/call.png';
import envelope from '../../assets/images/envelope.png';
import map from '../../assets/images/map.png'

export const ContactUs = () => {
    return (<>
            <div className='mb-5 '>
                <div className='flex flex-row justify-between items-center '>
                    <h2 className='text-3xl md:mr-4 mr-10 pl-10 capitalize font-bold pb-2'>contact us</h2>
                    <div className='capitalize  font-raleway pr-16 text-2xl flex items-end'>
                        <img className='md:mr-4 mr-4' src={locations} alt="locations"/>
                        <p>locations</p></div>
                </div>
                <hr className='w-64 pb-10'/>
                <form className='flex flex-col '>
                    <label className='' htmlFor="name">
                        <input type="text"
                               name='name' placeholder='name'
                               className='text-xl pb-4 pl-10 uppercase bg-footer border-b-2 w-full focus:outline-none'/>
                    </label>
                    <label className='' htmlFor="email">
                        <input type="email"
                               name='email' placeholder='email'
                               className='text-xl pb-4 pl-10 uppercase bg-footer border-b-2 w-full focus:outline-none'/>
                    </label>

                    <label className='' htmlFor="number">
                        <input type="number"
                               name='number' placeholder='phone number'
                               className='text-xl pb-4 pl-10 uppercase bg-footer border-b-2 w-full focus:outline-none'/>
                    </label>
                    <label className='' htmlFor="text">
                    <textarea rows='3'
                              name='text' placeholder='text'
                              className='text-xl pb-4 pl-10 uppercase bg-footer border-b-2 w-full focus:outline-none'/>
                    </label>
                    <GreenBtn styles='rounded-none uppercase text-black' name='send'/>
                </form>
                <FontAwesomeIcon icon={faMaskFace} />
            </div>

            <div className='flex flex-col '>

                <div className='flex items-end max-sm:items-start max-sm:flex-col'>
                  <div>  <img className='mr-4' src={call} alt=""/>
                      <p className='mr-40 text-xl'>+71 89078493
                      </p></div>
                    <div><img className='mr-4' src={envelope} alt=""/>
                        <p className='text-xl'>demo@gmail.com</p></div>
                </div>

                        <img src={map} alt=""/>
                    <div className='relative bottom-20 max-sm:bottom-0'>
                        <h2 className='mb-16 capitalize text-xl'>newsletter</h2>
                        <label htmlFor='email'>
                        <input type="email"
                               name='email' placeholder='enter your email'
                               className=' pl-6 text-black text-xl uppercase bg-white py-2.5 focus:outline-none max-sm:text-sm'/>
                        <GreenBtn styles='rounded-none text-black uppercase mt-0' name='subscribe' />
                    </label>
                </div>
            </div>

        </>

    )
}