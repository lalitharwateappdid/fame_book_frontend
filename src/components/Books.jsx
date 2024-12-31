// react icons
import { GoSortAsc } from "react-icons/go";

// components
import { BookDetailContainer } from "./BookDetailContainer";

// assets
import detailBook from "../assets/images/details-book.png";


export const Books = () => {
    return (
        <>
        <section
               className="p-[20px] py-[20px] lg:p-[100px] lg:py-[50px] bg-cover bg-center w-100 "
             >
                <div className="grid grid-cols-1">
                     <h3 className="font-bold text-3xl">Books</h3>

                        {/* filters */}
                     <div class="border-solid border-[1px] mt-[10px] px-[30px] py-[10px] flex justify-between rounded-md border-[#A6A6A6] ">
                        <div className="flex gap-5">
                            <p class="font-semibold">Today</p>
                            <p className="text-[#D9D9D9]">The Week</p>
                            <p className="text-[#D9D9D9]">The Month</p>
                        </div>
                        <div className="">
                            <p class="font-bold flex items-center gap-3"><GoSortAsc className="text-xl text-[#A6A6A6]" />Newest</p>
                            
                        </div>
                     </div>

                     {/* books */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-8 my-[20px]">
                        
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                            <BookDetailContainer image={detailBook} title={"Tales under a pur.."} author={"By Esther Howard"}/>
                    
                       
                    </div>

                </div>
        </section>
        </>
    )
}