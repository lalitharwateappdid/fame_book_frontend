
// components
import { BookDetailContainer } from "./BookDetailContainer";

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";




export const BookSlider = ({ headerTitle, css, slider = true, datas }) => {
  return (
    <>
      <div className={`${css} px-[5px]`}>
    <h3 className="font-bold text-3xl">{headerTitle}</h3>
    <div className="mt-[20px]">
      <Swiper
        spaceBetween={20} 
        slidesPerView={5} 
        breakpoints={{
          320: {
            slidesPerView: 2, 
          },
          640: { 
            slidesPerView: 2,
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
          autoplay:true
        }}
      >

        {
          datas.map((data) => (
            <SwiperSlide>
            <BookDetailContainer image={data.image} title={data.title} discount={data.discount} author={"By Esther Howard"} />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  </div>

    </>
  );
};
