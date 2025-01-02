import { useState } from "react"

// react icons
import { FaBars, FaTimes } from 'react-icons/fa'

export const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <>
         <nav className=" text-white sticky top-0 z-50 ">
            <div className="bg-black p-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#">Logo</a>
        </div>

            <div className="flex items-center gap-[100px] hidden lg:block">
            {/* <p className="uppercase font-semibold">log in</p> */}
            <p className="  rounded-full text-xs bg-[#B22323] px-[20px] py-[8px] ">Sign Up Now - it's free</p>
            </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        
      </div>
      </div>
      {/* Menu Items */}
    <div className="bg-black absolute lg:static right-0 left-0 transistion-all ease-in">
      <div className=" max-w-7xl mx-auto  ">
        <div className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} p-[20px] md:ps-[0px] ` }>
          <a href="#" className="block  lg:pt-[0px] text-xs uppercase font-thin active " >Home</a>
          <a href="#" className="block  pt-5 lg:pt-[0px] text-xs uppercase font-thin">Browse</a>
          <a href="#" className="block  pt-5 lg:pt-[0px] text-xs  uppercase font-thin">News & Articles</a>
          <a href="#" className="block  pt-5 lg:pt-[0px] text-xs uppercase font-thin">About membership</a>
          <a href="#" className="block  pt-5 lg:pt-[0px] text-xs uppercase font-thin">contact us</a>
          <a href="#" className="block  pt-5 lg:pt-[0px] text-xs uppercase font-thin">
          <p className="md:hidden  w-1/2 text-xs bg-[#B22323] px-[10px] py-[8px] ">Sign Up Now - it's free</p>
          </a>
        </div>
        </div>
        </div>
    </nav>
        </>
    )
}

const borderUnderline ={
    borderBottom: "3px solid red"
}