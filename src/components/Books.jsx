// react icons
import { GoSortAsc } from "react-icons/go";

// components
import { BookDetailContainer } from "./BookDetailContainer";
import { Main } from "./layouts/Main";

// assets
import detailBook from "../assets/images/details-book.png";

export const Books = () => {
  return (
    <>
      <Main>
        <section className="p-[20px] py-[20px] lg:p-[100px] lg:py-[50px] bg-cover bg-center w-100">
          <div className="flex gap-10">
            {/* Sidebar for filters */}
            <div className="w-[250px]">
              {/* Checkboxes for category filter */}
              <div className="mt-[20px] bg-[#F5F5F5] p-5 rounded-md">
                <h4 className="font-semibold mb-[20px]">Shop by Categories</h4>
                <hr />
                <div className="flex flex-col gap-3 mt-[10px]">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333] bg-transparent">Fiction</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Non-Fiction</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Science</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Fantasy</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Educational & Academic</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Lifestyle & Hobbies</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Poetry & Drama</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Spirituality & Religion</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-[#333]">Graphic Novels & Comics</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Books */}
            <div className="flex-1">
              <h3 className="font-bold text-3xl">Filters</h3>

              {/* Filters for time period */}
              <div className="border-solid border-[1px] mt-[10px] px-[30px] py-[10px] flex justify-between rounded-md border-[#A6A6A6]">
                <div className="flex gap-5">
                  <p className="font-semibold">Today</p>
                  <p className="text-[#D9D9D9]">The Week</p>
                  <p className="text-[#D9D9D9]">The Month</p>
                </div>
                <div>
                  <p className="font-bold flex items-center gap-3">
                    <GoSortAsc className="text-xl text-[#A6A6A6]" />
                    Newest
                  </p>
                </div>
              </div>
              <h3 className="font-bold text-3xl mt-[30px]">Books</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-8 my-[20px]">
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
                <BookDetailContainer
                  image={detailBook}
                  title={"Tales under a pur.."}
                  author={"By Esther Howard"}
                />
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};
