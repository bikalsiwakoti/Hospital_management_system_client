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
            <div className="total-slider">
                <div className="container">
                    <div className="topicCointainer">
                        <div className="heading">
                            <h2 className="headerTopic">Appointments with Top Doctors</h2>
                            <p className="headerSecondTopic">200+ experienced medical practitioners available for video consultation and appointment.</p>
                        </div>
                        <div className="viewBtn">
                            <button className="btn btn-lg py-3 btn-outline-dark"><span>View All Doctors</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
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
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="doctor">
                                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                                <h5 className="px-3">Dr Ram baran Yadav</h5>
                                <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                                <div className='star doctorStar'>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <span>5</span>
                                </div>
                                <button className="btn btn-lg py-3 btn-outline-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="doctor">
                                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                                <h5 className="px-3">Dr Ram baran Yadav</h5>
                                <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                                <div className='star doctorStar'>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <span>5</span>
                                </div>
                                <button className="btn btn-lg py-3 btn-outline-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="doctor">
                                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="img" />
                                <h5 className="px-3">Dr Ram baran Yadav</h5>
                                <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                                <div className='star doctorStar'>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <span>5</span>
                                </div>
                                <button className="btn btn-lg py-3 btn-outline-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="doctor">
                                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
                                <h5 className="px-3">Dr Ram Baran Yadav</h5>
                                <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                                <div className='star doctorStar'>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <span>5</span>
                                </div>
                                <button className="btn btn-lg py-3 btn-outline-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="doctor">
                                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
                                <h5 className="px-3">Dr Ram baran Yadav</h5>
                                <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
                                <div className='star doctorStar'>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <span>5</span>
                                </div>
                                <button className="btn btn-lg py-3 btn-outline-dark"><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>

            </div>

        </>
    )
}
