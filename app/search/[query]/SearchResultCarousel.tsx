'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import SearchResultCard from "./SearchResultCard";
import { NewsArticle } from "@/app/types";
import { VscLoading } from 'react-icons/vsc';

type Props = {
    articles: Array<NewsArticle>;
    handleClick: (newText: string, index: number) => void;
    isLoading: boolean;
    selectedCard: number | null;
};

const SearchCarousel = ({ articles, handleClick, isLoading, selectedCard }: Props) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isLoadingSlide, setIsLoadingSlide] = useState(true);
    const swiperRef = useRef<any>(null);

    // Once articles are loaded, hide the loading spinner
    useEffect(() => {
        if (articles && articles.length > 0) {
            setIsLoadingSlide(false);
        }
    }, [articles]);

    const handleSlideChangeTransitionEnd = () => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsBeginning(swiperInstance.isBeginning);
            setIsEnd(swiperInstance.isEnd);
        }
    };

    const centerSlide = (index: number) => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <section className="mt-7 sm:mt-10">
            {/* Loading spinner */}
            {isLoadingSlide && (
                <div className="w-full flex flex-col items-center justify-center mt-20 sm:mt-36">
                    <VscLoading size={50} className="animate-spin duration-300 mb-2" />
                    <span>Please wait...</span>
                </div>
            )}

            {/* SWIPER */}
            <div className={`relative flex items-center justify-between -mx-7 ${isLoadingSlide ? 'opacity-0' : ''}`}>
                {/* Left arrow */}
                <div className="hidden sm:block">
                    <div className="w-50 h-50 flex items-center justify-center">
                        <IoIosArrowDropleftCircle
                            size={50}
                            className={`button-left text-secondary ${isBeginning ? 'opacity-0' : ''} hover:cursor-pointer`}
                            onClick={() => swiperRef.current?.swiper.slidePrev()}
                        />
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    className="swiper_container basis-5/6 w-full"
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{ nextEl: '.button-right', prevEl: '.button-left' }}
                    pagination={{ clickable: false }}
                    onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                    breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 10, touchRatio: 1 },
                        768: { slidesPerView: 2, spaceBetween: 30, touchRatio: 0 },
                        1250: { slidesPerView: 3, spaceBetween: 60, touchRatio: 0 },
                    }}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <SearchResultCard
                                article={article}
                                handleClick={handleClick}
                                isLoading={isLoading}
                                index={index}
                                selectedCard={selectedCard}
                                centerSlide={centerSlide}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right arrow */}
                <div className="hidden sm:block">
                    <div className="w-50 h-50 flex items-center justify-center">
                        <IoIosArrowDroprightCircle
                            size={50}
                            className={`button-right text-secondary ${isEnd ? 'opacity-0' : ''} hover:cursor-pointer`}
                            onClick={() => swiperRef.current?.swiper.slideNext()}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchCarousel;