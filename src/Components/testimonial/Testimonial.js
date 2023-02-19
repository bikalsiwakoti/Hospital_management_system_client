import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./testimonial.css"
// import required modules
import { Pagination } from "swiper";

import "swiper/css/pagination";

export default function Testimonial() {

    return (
        <>
            <div className="product-slider container">
                <h2 className="header">Clients Testimonial</h2>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    // pagination={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}

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
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-card bg-white mx-3 my-3 rounded">

                            <div class="profile-info d-flex al d-grid gap-4 align-items-center">
                                <img class="rounded-circle"
                                    src="https://shekharstha.com.np/images/IMG_4069.jpg" alt="" />
                                <div class="">
                                    <h5 class="text-dark fs-4">Shekhar Shrestha</h5>
                                    <p class="text-dark fs-5">Pokhara, Nepal</p>
                                </div>
                            </div>
                            <p class="text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>

                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>


        </>
    )
}
