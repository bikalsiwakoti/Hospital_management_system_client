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
import { Link, useNavigate } from "react-router-dom";

export default function ProductSlider({ product }) {
    const navigate = useNavigate()

    const handleProductClick = () => {
        navigate('/doctors')
    }
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
                            <button className="btn btn-lg py-3 btn-outline-dark"><span onClick={handleProductClick}>View All Products</span> <i class="fa-solid fa-arrow-right"></i></button>
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
                            1000: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {product?.data?.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='productSliderCard'>
                                    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'initial' }}>
                                        <img src={`http://localhost:5000/images/${item.img}`}></img>
                                        <div className='info'>
                                            <div className='productInfo'>
                                                <h1>{item.name}</h1>
                                                <span></span>
                                            </div>
                                            <p>{item.genre}</p>
                                        </div>
                                        <hr />
                                    </Link>
                                    <div className='details'>
                                        <div>
                                            <i class='bx bx-cart' ></i>
                                        </div>
                                        <div className='price'>
                                            <h2>NRS. {item.price}</h2>
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
