// react icons
import { IoLocationOutline } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";


export const Footer = () => {
    return (
        <>
        <div className="py-12" style={linearGradient}>
            <div className="mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div class="flex flex-col justify-end">
                    <p>Hello to: info@company.com</p>
                    <p>Follow:</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-bold">Company</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Our Team</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold">Important</p>
                    <p>Privacy policy</p>
                    <p>Term and condition</p>
                    <p>Our Process</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold">Official Info</p>
                    <p className="flex gap-3"> <p><IoLocationOutline />
                    </p> <p>12th Main, 4th Block, Koramangala, Bangalore, Karnataka 560034</p></p>
                    <p className="flex  gap-3"> <p><IoBagSharp />

                    </p> <p>12th Main, 4th Block, Koramangala, Bangalore, Karnataka 560034</p></p>
                    <p className="flex gap-3"> <p><MdOutlinePhone />
                    </p> <p>+(91) 9876543210</p></p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}


const linearGradient = {
    color: "#fff",
    background: "rgb(37,37,37)",
    background: 'linear-gradient(90deg, rgba(37,37,37,1) 38%, rgba(178,35,35,1) 100%)',
}