// components
import { Main } from "./layouts/Main";
import { BookSlider } from "./BookSlider";
import { FeaturedProductSlider } from "../FeaturedProductSlider";
import { SpecialBookSlider } from "./SpecialBookSlider";
import { BestSellingSlider } from "./BestSellingStoriesSlider";

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
import AnimeCharacter from "../assets/images/home/anime_character.png";
import AnimeBg from "../assets/images/home/anime-carousel.png"

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

const specialBooks = [
  {
    image: DiscoverA1,
    title: "Really good actu..",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    og_price: 12,
    discount_price: 12,
    tag: ["sci-fi novel", "sci-fi novel"],
  },
  {
    image: DiscoverA3,
    title: "A Heavy Lift",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    og_price: 12,
    discount_price: 12,
    tag: ["sci-fi novel", "sci-fi novel"],
  },
  {
    image: DiscoverA4,
    title: "Really good actu..",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    og_price: 12,
    discount_price: 12,
    tag: ["sci-fi novel", "sci-fi novel"],
  },
  {
    image: DiscoverA5,
    title: "Really good actu..",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    og_price: 12,
    discount_price: 12,
    tag: ["sci-fi novel", "sci-fi novel"],
  },
];

export const Home = () => {
  return (
    <>
      <Main>
        {/* hero section */}
        <div
         className="py-[70px]"
          style={{
            position: "relative",
            height: "100vh",
            backgroundImage: `url(${AnimeCharacter})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.9) 70%)", // Linear gradient with black overlay
              zIndex: 1,
            }}
          >
            {/* Add other content here, if needed */}
            <div className="flex items-center flex-col">
              <img src={Logo} alt="" className="inline" />
              <h3 className="font-bold text-3xl text-white">Classic eBook</h3>
              <p className="text-white">New to our eBooks? Enjoy your first title on us—absolutely free!</p>
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

            <div className="px-[30px]">
              <img src={AnimeBg} className="object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* Immerse Yourself in Bestselling Stories */}
        <div className="bg-black p-[50px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-white text-3xl font-bold">
                Immerse Yourself in Bestselling Stories
              </h3>
              <h3 className="text-white  w-[60%] text-center">
                Discover captivating stories and timeless classics from your
                favorite authors and genres. Stream or download anytime with the
                Audible app. Explore some top picks below!
              </h3>
            </div>
            <BestSellingSlider />
          </div>
        </div>

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

          {/* book on sales 1 */}
          <div className="py-[20px] ">
            <BookSlider datas={sales1} headerTitle={"Books on sale"} />
          </div>

          {/* book on sales 2 */}
          <div className="py-[20px]">
            <BookSlider datas={sales2} headerTitle={"Books on sale"} />
          </div>
        </div>

        {/* special Highlight */}
        <div className="bg-[#FFEFE4] py-[50px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-3xl capitalize font-bold mb-[10px]">
                Special Highlights
              </h3>
              <p className="w-[60%] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.s
              </p>
            </div>
            <SpecialBookSlider datas={specialBooks} />
          </div>
        </div>
        <div>
          <div className="py-[20px]">
            <BookSlider datas={sales3} headerTitle={"Books on sale"} />
          </div>
          <div className="py-[20px]">
            <BookSlider datas={sales4} headerTitle={"Books on sale"} />
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
  // borderRadius: "20px",
  overflow: "hidden",
};

const divStyle = {
  backgroundImage: "url('../assets/images/home/anime_character.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
