import React from "react";
import {HeadingTitle} from "../HeadingTitle/HeadingTitle";
import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination, } from "swiper";
import SwiperCore, {Autoplay} from "swiper";
import data from '../../Data/data.json'

import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialCard.css'
export default function TestimonialCard () {
    const testimonial = data.Testimonial;
    SwiperCore.use([Autoplay])
    return(
        <section>
            <HeadingTitle title={'testimonial'} description={'It is a long established fact that a reader will be distracted by the '} />
            <Swiper
                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={35}
                slidesPerView={2}
                pagination={{ clickable: true }}
                uniqueNavElements={true}
                className='mt-16 mb-16'
                autoplay={{
                    delay:3000,
                pauseOnMouseEnter:true,
                    disableOnInteraction: false}}
            >

                {testimonial?.map((index)=> {
                    return (
                        <SwiperSlide className='bg-black ' key={index.id}>
                            <div className='w-full h-full flex flex-wrap items-center '>
                                <img src={require('../../assets/images/Testimonial/' + index.image + '.png')} alt=""/>
                                <p className='text-white'>{index.name}</p>
                                <p className='text-blue-700 order-none'>{index.title}</p>
                                <p className='text-white mb-20'>{index.description}</p>
                            </div>
                        </SwiperSlide>)
                })}


            </Swiper>
        </section>
    )
}