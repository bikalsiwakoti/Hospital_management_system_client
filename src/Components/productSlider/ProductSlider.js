import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./productSlider.css"
// import required modules
import { Navigation } from "swiper";

import "swiper/css/navigation";

export default function ProductSlider() {

    return (
        <>
            <div className="product-slider container">
                <h2 className="header">Our Products</h2>
                <Swiper
                    spaceBetween={40}
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
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product">
                            <img className="img-fluid w-100 rounded-2" src="https://cdn.shopify.com/s/files/1/0841/3619/products/Single_Dose_Liquid_Medicine_Bottles_Food_Allergy_Superheroes_1.jpg?v=1557165495" alt="img" />
                            <p className="fs-4 text-secondary-emphasis mb-2 px-3">Medicine</p>
                            <h5 className="px-3">Nrs 590</h5>
                            <button className="btn btn-lg w-100 py-2 fs-3 btn-primary">Buy Now</button>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>


        </>
    )
}
