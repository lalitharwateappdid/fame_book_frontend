import detailsBg from "../assets/images/detail-bg.png";
import detailBook from "../assets/images/details-book.png";

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const BookSlider = ({ headerTitle, css, slider = true }) => {
  return (
    <>
      <div className={`${css}`}>
        <h3 className="font-bold text-3xl">{headerTitle}</h3>
        <div className="mt-[40px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
                <div className="mt-[10px]">
                    {/* book name */}
                <p className="text-xl font-semibold">Tales under a pur..</p>
                    {/* author name */}
                <p className="text-xs font-thin uppercase text-[#EE8946]">By Esther Howard</p>
                
                {/* stars and review container */}
                <div className="flex justify-between">
                    
                </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <div class="absolute top-[30px] left-0 ">
                <p className="bg-[#B22323] text-white py-[3px] px-[15px] " style={{borderTopRightRadius: "20px",borderBottomRightRadius: "20px"}}>22% off</p>
                </div>
                <img
                  className="w-[226px] h-[280px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
