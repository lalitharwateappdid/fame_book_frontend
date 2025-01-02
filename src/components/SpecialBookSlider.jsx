// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// components
import { BookDetailContainer } from "./BookDetailContainer";

export const SpecialBookSlider = ({ css, datas }) => {
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
                slidesPerView: 2,
              },
              autoplay: true,
            }}
          >
            {datas.map((data) => (
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center ">
                 
                  <img src={data.image} alt="" />
                
                  <div>
                    <p className="uppercase font-thin text-xl">Best seller</p>
                    <h3 className="font-bold text-3xl">{data.title}</h3>
                    <div className="flex gap-5 mt-[10px]">
                      {data.tag &&
                        data.tag.map((t) => (
                          <>
                            <p className="uppercase text-black ">{t}</p>
                          </>
                        ))}
                    </div>
                    <div>
                      
                    <p>{data.description}</p>
                    </div>
                    <div class="flex  gap-5 my-[10px]">
                        <p className="text-black font-semibold">INR {data.discount_price}</p>
                        <p className="text-red-800 font-semibold line-through ">INR {data.og_price}</p>
                    </div>

                    <div className="flex gap-5">
                        <button className="uppercase  text-white bg-[#B22323] rounded px-[10px] py-[5px]">buy now</button>
                        <button className="uppercase border border-1 border-[#838383] rounded px-[10px] py-[5px] ">see details</button>
                    </div>
                  </div>
                </div>
                {/* <BookDetailContainer image={data.image} title={data.title} discount={data.discount} author={"By Esther Howard"} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
