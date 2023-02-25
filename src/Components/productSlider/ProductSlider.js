import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./productSlider.css"
// import required modules
import { Navigation } from "swiper";
import ProductCard from '.././productCard/ProductCard'

import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function ProductSlider() {
    const [clicked, setClicked] = useState(false)
    const array = [1,2,3,4,5,6,7,8,9,10]


    return (
        <>
            <div className="total-slider">
                <div className="product-slider container">
                    <div className="topicCointainer">
                        <div className="heading">
                            <h2 className="headerTopic">Products</h2>
                            <p className="headerSecondTopic">Buy products related to medical from medcare.</p>
                        </div>
                        <div className="viewBtn">
                            <button className="btn btn-lg py-3 btn-outline-dark"><span>View All Products</span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1000:{
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {array.map(item => (
                            <SwiperSlide key={item}>
                                <div className='productSliderCard'>
                                    <Link to='/product/123' style={{ textDecoration: 'none', color: 'initial' }}>
                                        <img src='https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>
                                        <div className='info'>
                                            <div className='productInfo'>
                                                <h1>Medicine</h1>
                                                <span></span>
                                            </div>
                                            <p>description</p>
                                            <div className='star'>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <hr />
                                    </Link>
                                    <div className='details'>
                                        <div className={clicked ? 'iconClicked' : 'cartIcon'} onClick={() => setClicked(!clicked)}>
                                            <i class='bx bx-cart' ></i>
                                        </div>
                                        <div className='price'>
                                            <span>PRICE</span>
                                            <h2>NRS. 200</h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                        }

                    </Swiper>
                </div>
            </div>


        </>
    )
}
