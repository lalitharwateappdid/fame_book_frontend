// components
import { Main } from "./layouts/Main";
import { BookSlider } from "./BookSlider";
import { FeaturedProductSlider } from "../FeaturedProductSlider";

// assets
import DiscoverImage from "../assets/images/home/discover_image.png";
import Logo from "../assets/images/home/logo.png";

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// book for sales a1 json
import DiscoverA1 from "../assets/images/home/discover-a-1.png";
import DiscoverA2 from "../assets/images/home/discover-a-2.png";
import DiscoverA3 from "../assets/images/home/discover-a-3.png";
import DiscoverA4 from "../assets/images/home/discover-a-4.png";
import DiscoverA5 from "../assets/images/home/discover-a-5.png";
import DiscoverA6 from "../assets/images/home/discover-a-6.png";
import DiscoverB1 from "../assets/images/home/discover-b-1.png";
import DiscoverB2 from "../assets/images/home/discover-b-2.png";
import DiscoverB3 from "../assets/images/home/discover-b-3.png";
import DiscoverB4 from "../assets/images/home/discover-b-4.png";
import DiscoverB5 from "../assets/images/home/discover-b-5.png";
import DiscoverB6 from "../assets/images/home/discover-b-6.png";
import DiscoverC1 from "../assets/images/home/discover-c-1.png";
import DiscoverC2 from "../assets/images/home/discover-c-2.png";
import DiscoverC3 from "../assets/images/home/discover-c-3.png";
import DiscoverC4 from "../assets/images/home/discover-c-4.png";
import DiscoverC5 from "../assets/images/home/discover-c-5.png";
import DiscoverC6 from "../assets/images/home/discover-c-6.png";
import DiscoverD1 from "../assets/images/home/discover-d-1.png";
import DiscoverD2 from "../assets/images/home/discover-d-2.png";
import DiscoverD3 from "../assets/images/home/discover-d-3.png";
import DiscoverD4 from "../assets/images/home/discover-d-4.png";
import DiscoverD5 from "../assets/images/home/discover-d-5.png";
import DiscoverD6 from "../assets/images/home/discover-d-6.png";

const sales1 = [
  {
    title: "Pencil",
    image: DiscoverA1,
    discount: 12,
  },
  {
    title: "Portals",
    image: DiscoverA2,
    discount: 12,
  },
  {
    title: "Tales under a pur..",
    image: DiscoverA3,
    discount: 22,
  },
  {
    title: "The Book Of Art",
    image: DiscoverA4,
    discount: 32,
  },
  {
    title: "Anime A History",
    image: DiscoverA5,
    discount: 22,
  },
  {
    title: "Soul",
    image: DiscoverA6,
    discount: 22,
  },
];

const sales2 = [
  {
    title: "Pencil",
    image: DiscoverB1,
    discount: 12,
  },
  {
    title: "Portals",
    image: DiscoverB2,
    discount: 12,
  },
  {
    title: "Tales under a pur..",
    image: DiscoverB3,
    discount: 22,
  },
  {
    title: "Soul",
    image: DiscoverB4,
    discount: 32,
  },
  {
    title: "The Book of Art",
    image: DiscoverB5,
    discount: 22,
  },
  {
    title: "Anime",
    image: DiscoverB6,
    discount: 22,
  },
];

const sales3 = [
  {
    title: "Pencil",
    image: DiscoverC1,
    discount: 12,
  },
  {
    title: "Portals",
    image: DiscoverC2,
    discount: 12,
  },
  {
    title: "Tales under a pur..",
    image: DiscoverC3,
    discount: 22,
  },
  {
    title: "Soul",
    image: DiscoverC4,
    discount: 32,
  },
  {
    title: "The Book of Art",
    image: DiscoverC5,
    discount: 22,
  },
  {
    title: "Anime",
    image: DiscoverC6,
    discount: 22,
  },
];

const sales4 = [
  {
    title: "Pencil",
    image: DiscoverD1,
    discount: 12,
  },
  {
    title: "Portals",
    image: DiscoverD2,
    discount: 12,
  },
  {
    title: "Tales under a pur..",
    image: DiscoverD3,
    discount: 22,
  },
  {
    title: "Soul",
    image: DiscoverD4,
    discount: 32,
  },
  {
    title: "The Book of Art",
    image: DiscoverD5,
    discount: 22,
  },
  {
    title: "Anime",
    image: DiscoverD6,
    discount: 22,
  },
];

const featured1 = [
  {
    title: "Fiction",
    color: "#F7ABAD",
  },
  {
    title: "Mysteries & Thrillers",
    color: "#CBB6E3",
  },
  {
    title: "Classics",
    color: "#B3EDA4",
  },
  {
    title: "Personal Development",
    color: "#A4E1ED",
  },
  {
    title: "Sci-fi Fantasy",
    color: "#D1ED78",
  },
  {
    title: "Thriller",
    color: "#FFC095",
  },
];

export const Home = () => {
  return (
    <>
      <Main>

      {/* Immerse Yourself in Bestselling Stories */}
      

        {/* 30 days trail */}
        <div
         
          style={{
            background: "radial-gradient(rgb(88 0 0), black 70%)",
          }}
        >
          <div class="max-w-7xl mx-auto py-[50px] ">
            <div className="flex justify-center ">
              <h3 className="text-white font-bold text-4xl  w-[70%] md:w-[40%] mb-[20px] text-center ">
                Enjoy a 30-day free trial with access to
              </h3>
            </div>
            <div className="px-[30px]">
              <Swiper
                spaceBetween={80}
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
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                  autoplay: true,
                }}
              >
                <SwiperSlide>
                  <div
                    className="flex justify-center items-center  bg-cover bg-center  "
                    style={borderGradient}
                  >
                    <div className=" p-8 bg-[#ffffff05]   backdrop-blur-md  shadow">
                      <h2 className="text-white text-2xl font-bold">
                        <div className="flex justify-center">
                          <img src={Logo} className="w-[60px]" alt="" />
                        </div>
                      </h2>
                      <p className="text-white text-xl mb-5 font-bold mt-4 text-center">
                        Join random
                      </p>
                      <p className="text-center text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="flex justify-center items-center  bg-cover bg-center  "
                    style={borderGradient}
                  >
                    <div className=" p-8  bg-[#ffffff05]   backdrop-blur-md  shadow">
                      <h2 className="text-white text-2xl font-bold">
                        <div className="flex justify-center">
                          <img src={Logo} className="w-[60px]" alt="" />
                        </div>
                      </h2>
                      <p className="text-white text-xl mb-5 font-bold mt-4 text-center">
                        Create Custom
                      </p>
                      <p className="text-center text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="flex justify-center items-center  bg-cover bg-center  "
                    style={borderGradient}
                  >
                    <div className=" p-8  bg-[#ffffff05]   backdrop-blur-md  shadow">
                      <h2 className="text-white text-2xl font-bold">
                        <div className="flex justify-center">
                          <img src={Logo} className="w-[60px]" alt="" />
                        </div>
                      </h2>
                      <p className="text-white text-xl mb-5 font-bold mt-4 text-center">
                        Participants
                      </p>
                      <p className="text-center text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex items-center flex-col justify-center space-y-3 mt-[20px]">
              <a
                href="#"
                className="inline bg-[#B22323] rounded-full text-white px-[50px] py-[6px]"
              >
                Start your free trial now
              </a>
              <p className="text-white text-xs">
                ₹199 per month after 30-day free trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* discover books */}
          <div className="p-[20px]">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col items-center">
                <img
                  src={DiscoverImage}
                  className="object-cover w-[300px]"
                  alt=""
                />
                <div className="flex items-center flex-col mt-[10px]">
                  <p className="font-bold">Lorem ipsum dolor sit</p>
                  <p className="font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipisc...
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-2xl capitalize w-[70%]">
                  over what millions of listeners are loving right now.
                </h3>
                <div>{/* <BookSlider/> */}</div>
              </div>
            </div>
          </div>

          {/* featured books */}
          <div className="py-[20px]">
            <FeaturedProductSlider
              datas={featured1}
              headerTitle={"Featured Products"}
              subTitle={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
          </div>

          {/* book on sales */}
          {/* <div className="py-[20px]">
            <h3 className="font-bold text-3xl">Books on sale</h3>
                <BookSlider/>
            </div> */}

          {/* book on sales 1 */}
          <div className="py-[20px] ">
            <BookSlider datas={sales1} headerTitle={"Books on sale"} />
          </div>

          {/* book on sales 2 */}
          <div className="py-[20px]">
            <BookSlider datas={sales2} headerTitle={"Books on sale"} />
          </div>

          <div className="py-[20px]">
            <BookSlider datas={sales3} headerTitle={"Books on sale"} />
          </div>
        </div>
      </Main>
    </>
  );
};

const borderGradient = {
  borderImage: "linear-gradient(to bottom, #B22323 0%, #26373700 70%) 1",
  borderStyle: "solid",
  borderWidth: "1px",
  // borderRadius: "20px", // Apply border-radius to round corners
  overflow: "hidden", // Prevents content from overflowing the rounded corners
};

const divStyle = {
  width: "300px",
  height: "80px",
  border: "double 1em transparent",
  borderRadius: "30px",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(to right, green, gold)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};
