// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const FeaturedProductSlider = ({
  headerTitle,
  datas,
  css,
  subTitle,
}) => {
  return (
    <>
      <div className={`${css} px-[5px]`}>
        <h3 className="font-bold text-3xl text-center">{headerTitle}</h3>
        {/* {
    subTitle && (
        <>
        <div className="flex justify-center w-[60%]">
        <p className="text-center">{subTitle}</p>
        </div>
        </>
    )
  } */}
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
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 6,
              },
              autoplay: true,
            }}
          >
            {datas.map((data) => (
              <SwiperSlide>
                <div className="relative">
                <div className={`bg-[#F7ABAD] relative flex justify-center items-center h-[100%]`} style={book}>
                  {/* <div className="relative"> */}
                    <div
                      className="absolute left-[12px] lg:left-[10px] h-[100vh]"
                      style={{
                        border: "2px solid #fff",
                        opacity: "0.4",
                        zIndex: "1",
                      }}
                    >

                    </div>

                    <div>
                      <div className="">
                        <p className="font-bold text-[#fff] text-xl p-[20px] text-center">
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const book = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
height: "280px"
}
