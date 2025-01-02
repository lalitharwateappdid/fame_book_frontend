// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// assets
import Shiva from "../assets/images/home/shiva.png"
import Soul from "../assets/images/home/soul.png"
import Naruto from "../assets/images/home/naruto.png"
import Art from "../assets/images/home/art.png"
import Anime from "../assets/images/home/anime.png"

export const BestSellingSlider = ({css}) => {
    return (
        <>
              <div className={`${css} px-[10px]`}>
        <div className="mt-[20px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 5,
              },
              autoplay: true,
            }}
          >
              <SwiperSlide>
                <div class="flex justify-center">
                    <img src={Shiva} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div >
                    <img src={Soul} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex justify-center">
                    <img src={Naruto} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex justify-center">
                    <img src={Art} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex justify-center">
                    <img src={Anime} alt="" />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div> 
        </>
    )
}