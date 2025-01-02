// image asset
import detailsBg from "../assets/images/detail-bg.png";
import detailBook from "../assets/images/details-book.png";

// components
import { BookSlider } from "./BookSlider";

// react icons
import { LuBookOpenText } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

export const Details = () => {
  return (
    <>
      <section
        className="p-[20px] py-[20px] lg:p-[100px] lg:py-[50px] bg-cover bg-center w-100 "
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 30%, #000000 70%), url(${detailsBg})`,
        }}
      >
        {/* breadcrumb */}
        <p className="text-white font-bold mb-[30px]">New/Action</p>

        {/* main */}
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row  lg:gap-[60px]">
            <div class="flex flex-col items-center">
              {/* image container */}
              <div className="relative">
                <div
                  className="absolute top-[40px] left-0"
                  style={{ zIndex: "2" }}
                >
                  <p
                    className="bg-[#B22323] text-white py-[3px] px-[15px] "
                    style={{
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    22% off
                  </p>
                </div>

                <div className="absolute left-[12px] lg:left-[10px] h-[100%]" style={{border: "2px solid #fff", opacity:"0.4", zIndex:"1"}}></div>
                <img
                  className="w-[324px] h-[425px]"
                  src={`${detailBook}`}
                  alt=""
                />
              </div>

              {/* read and bookmark container */}
              <div className="flex  mt-[40px]">
                <span className="bg-white text-xl text-black py-[13px] px-[83px] flex items-center ">
                  <LuBookOpenText className="me-2" />
                  Read
                </span>

                <span className="border-2 ms-[30px] px-[8px] border-white flex items-center justify-center">
                  <CiBookmark
                    className="text-2xl  text-white"
                    style={{ fontWeight: "900" }}
                  />
                </span>
              </div>
            </div>

            <div className="mt-[30px] flex flex-col  justify-end">
              <h3 className="text-4xl lg:text-5xl text-white inria-serif">
                Tales Under a Purple Sky
              </h3>

              {/* star and reviews container */}
              <div className="flex gap-2 items-center mt-[20px] text-white">
                <CiStar className="text-3xl " />
                <CiStar className="text-3xl" />
                <CiStar className="text-3xl" />
                <CiStar className="text-3xl" />
                <CiStar className="text-3xl" />

                {/* reviews */}
                <span className="text-sm">(3.2) 1000+ users</span>
              </div>

              {/* tags container */}
              <div className="flex gap-10 items-center mt-[20px] text-white">
                <p className="font-semibold">Fanstasy</p>
                <p className="font-semibold">Drama</p>
                <p className="font-semibold">MyStory</p>
              </div>

              {/* description container */}
              <p className="mt-[20px]  text-xs sm:text-sm text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookSlider
        headerTitle={"Popular book’s"}
        css={"p-[20px] py-[20px] lg:p-[100px] lg:py-[50px]"}
      />
    </>
  );
};
