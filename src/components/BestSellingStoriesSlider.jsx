// react icons
import { IoPlayCircleOutline } from "react-icons/io5";


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
              <div className={`${css} p-[50px]`}>
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
              <SwiperSlide >
                <div class="flex justify-center">
                    <img src={Soul} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex items-center flex-col">
                    <img src={Naruto} alt="" />

                    <div class="flex flex-col items-center text-white space-y-3">
                        <p>Written by: Amol patil</p>
                        <p className="text-center">Society: Anthropology - Civilisation</p>
                        <p className="flex items-center gap-2"><IoPlayCircleOutline />Sample</p>
                    </div>
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