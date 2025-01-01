import detailBook from "../assets/images/details-book.png";

// components
import { BookDetailContainer } from "./BookDetailContainer";

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
                <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
            <SwiperSlide>
               <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
            <SwiperSlide>
            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
