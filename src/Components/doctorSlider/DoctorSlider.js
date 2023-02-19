import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./doctorSlider.css"
// import required modules
import { Navigation } from "swiper";

import "swiper/css/navigation";

export default function DoctorSlider() {

    return (
        <>
            <div className="doctor-slider container">
                <h2 className="header">Our doctors</h2>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="doctor">
                            <img className="img-fluid w-100 rounded-2" src="https://demo.midas.com.np/uploads/samir-removebg-preview.png" alt="img" />
                            <h5 className="px-3">Dr Ram baran Yadav</h5>
                            <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                            <button className="btn btn-lg w-100 py-3 btn-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="doctor">
                            <img className="img-fluid w-100 rounded-2" src="https://demo.midas.com.np/uploads/samir-removebg-preview.png" alt="img" />
                            <h5 className="px-3">Dr Ram baran Yadav</h5>
                            <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                            <button className="btn btn-lg w-100 py-3 btn-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="doctor">
                            <img className="img-fluid w-100 rounded-2" src="https://demo.midas.com.np/uploads/samir-removebg-preview.png" alt="img" />
                            <h5 className="px-3">Dr Ram Baran Yadav</h5>
                            <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                            <button className="btn btn-lg w-100 py-3 btn-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="doctor">
                            <img className="img-fluid w-100 rounded-2" src="https://demo.midas.com.np/uploads/samir-removebg-preview.png" alt="img" />
                            <h5 className="px-3">Dr Ram baran Yadav</h5>
                            <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                            <button className="btn btn-lg w-100 py-3 btn-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>


        </>
    )
}
