// Import Swiper React components
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import TodayCard from "app/(components)/TodayCard";

const NewsCarousel = () => {
  return (
    <section className="mt-10">
        <hr className="border-1 opacity-20" />
        {/* HEADER */}
        <div className="flex items-center gap-3 my-2 xs:my-8">
            <p className="font-bold text-2xl">Artificial Intelligence</p>
        </div>
        
        {/* SWIPER */}
        <div className="relative">

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2  hidden">
                <MdArrowBackIos size={40} className=" button-left text-primary bg-secondary" />
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden">
                <MdArrowForwardIos size={40} className=" button-right text-primary bg-secondary" />
            </div>


            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="swiper_container"
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ nextEl: '.button-right', prevEl: '.button-left' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
                480: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
                1280: {
                slidesPerView: 3,
                spaceBetween: 60,
                },
            }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="sm:grid gap-5 grid-cols-2 grid-rows-2 sm:h-[450px] pb-10 ">
                        {/* <TodayCard
                        className="col-span-2 row-span-2 bg-gray"
                        // post={trendingPosts[1]}
                        /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="sm:grid gap-5 grid-cols-2 grid-rows-2 sm:h-[450px] pb-10">
                            {/* <TodayCard
                            className="col-span-2 row-span-2 bg-gray"
                            // post={trendingPosts[1]}
                            /> */}
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="sm:grid gap-5 grid-cols-2 grid-rows-2 sm:h-[450px] pb-10 ">
                            {/* <TodayCard
                            className="col-span-2 row-span-2 bg-gray"
                            // post={trendingPosts[1]}
                            /> */}
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="sm:grid gap-5 grid-cols-2 grid-rows-2 sm:h-[450px] pb-10 ">
                            {/* <TodayCard
                            className="col-span-2 row-span-2 bg-gray"
                            // post={trendingPosts[1]}
                            /> */}
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
};

export default NewsCarousel;