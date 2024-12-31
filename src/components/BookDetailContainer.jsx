// react icons
import { LiaStarSolid } from "react-icons/lia";


export const BookDetailContainer = ({image,title,author,reviews,rating,stars}) => {
  return (
    <>
      <div>
        {/* book image */}
        <div>
        <img src={image} alt="" />
        </div>

        {/* book short details */}
        <div className="mt-[10px]">
            <p className="font-semibold text-xl">{title}</p>
            <p className="uppercase text-[#EE8946] text-sm">{author}</p>

            {/* stars and review container */}
            <div className="flex flex-col lg:flex-row mt-[8px]  justify-between">
                {/* stars */}
                    {/* stars */}
                   <div class="flex gap-2">
                   <LiaStarSolid className="text-sm lg:text-xl text-[#EE8946]" />
                   <LiaStarSolid className="text-sm lg:text-xl text-[#D9D9D9]" />
                   <LiaStarSolid className="text-sm lg:text-xl text-[#D9D9D9]" />
                   <LiaStarSolid className="text-sm lg:text-xl text-[#D9D9D9]" />
                   <LiaStarSolid className="text-sm lg:text-xl text-[#D9D9D9]" />
                   </div>
                   <div className="flex mt-[8px] md:mt-[0px] lg:justify-between gap-1 text-xs lg:text-sm">
                    <span>(3.2)</span>
                    <span>1000+ users</span>
                   </div>
            </div>
        </div>
      </div>
    </>
  );
};
