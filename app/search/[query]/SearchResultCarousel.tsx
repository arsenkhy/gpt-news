'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
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
    const swiperRef = useRef<any>(null);
    const [isLoadingSlide, setIsLoadingSlide] = useState(true);
    let slideIndex: number = 0;
  
    useEffect(() => {
      if (articles.length === 1) {
        setIsLoadingSlide(false);
      }

      const swiperInstance = swiperRef.current?.swiper;
      if (swiperInstance) {
        swiperInstance.on('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);
      }

      return () => {
        if (swiperInstance) {
          swiperInstance.off('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);
        }
      };
    }, []);
  
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

    const handleSlideLoad = () => {
      slideIndex++;
      if (slideIndex === articles.length - 1) {
        setIsLoadingSlide(false);
      }
    };

  return (
    <section className="mt-7 sm:mt-10">

        {isLoadingSlide ? (
          <div className="w-full flex flex-col items-center justify-center mt-20 sm:mt-36">
              <VscLoading size={50} className="animate-spin duration-300 mb-2" />
              <span>Please wait...</span>
          </div>
        ) : (
          <div/>
        )}

        {/* SWIPER */}
        <div className={`relative flex items-center justify-between -mx-7 ${isLoadingSlide ? 'opacity-0' : ''}`}>
            <div className="hidden sm:block">
                <div className="w-50 h-50 flex items-center justify-center">
                    <IoIosArrowDropleftCircle size={50} className={`button-left text-secondary ${isBeginning ? 'opacity-0' : ''} hover:cursor-pointer`} />
                </div>
            </div>
          
            <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            className="swiper_container basis-5/6 w-full"
            spaceBetween={30}
            slidesPerView={1}
            lazyPreloadPrevNext={5}
            navigation={{ nextEl: '.button-right', prevEl: '.button-left' }}
            pagination={{clickable: false}}
            breakpoints={{
                480: {
                slidesPerView: 1,
                spaceBetween: 10,
                touchRatio: 1,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 30,
                touchRatio: 0,
                },
                1250: {
                slidesPerView: 3,
                spaceBetween: 60,
                touchRatio: 0,
                },
            }}
            >
                {articles.map((article, index) => (
                  <SwiperSlide key={index} onLoad={() => handleSlideLoad()}>
                      <SearchResultCard 
                        article={article}
                        handleClick={handleClick}
                        isLoading={isLoading}
                        index={index}
                        selectedCard={selectedCard}
                        centerSlide={centerSlide}/>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="hidden sm:block">
                <div className="w-50 h-50 flex items-center justify-center">
                    <IoIosArrowDroprightCircle size={50} className={`button-right text-secondary ${isEnd ? 'opacity-0' : ''} hover:cursor-pointer`} />
                </div>
            </div>

        </div>

    </section>
  );
};

export default SearchCarousel;