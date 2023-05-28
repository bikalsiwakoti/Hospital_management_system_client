import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./doctorSlider.css"
// import required modules
import { Navigation } from "swiper";

import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

export default function DoctorSlider({ doctor }) {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/doctor/${id}`)
    }

    const handleDoctorClick=()=>{
        navigate('/doctors')
      }
    

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
                            <button className="btn btn-lg py-3 btn-outline-dark"><span onClick={handleDoctorClick}>View All Doctors</span> <i class="fa-solid fa-arrow-right"></i></button>
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
                        {doctor?.map(doctor => {
                            return (
                                < SwiperSlide >
                                    <div className="doctor">
                                        <img className="img-fluid rounded-2" src={`http://localhost:5000/images/${doctor.doctor.img}`} alt="img" />
                                        <h5 className="px-3">{doctor.doctor.fullname}</h5>
                                        <p className=" text-secondary-emphasis mb-2 px-3">{doctor.doctor.specialist}</p>
                                        {/* <div className='star doctorStar'>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <span>5</span>
                                    </div> */}
                                        <button className="btn btn-lg py-3 btn-outline-dark" onClick={()=> handleClick(doctor.id)}><span>Book Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </SwiperSlide>
                            )
                        })

                        }
                        ...
                    </Swiper>
                </div>

            </div >

        </>
    )
}
