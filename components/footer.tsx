import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {

    const currentYear = () => {
        const now = new Date();
        return now.getFullYear();
    }

    return (
        <div className='w-full  h-[420px]  bg-[#DF3B11] text-white py-[65px] mt-10 '>
            <div className='w-[90%] h-[60%] grid grid-cols-3 gap-6 mx-auto justify-between  '>
                {/* 1st column */}
                <div className='flex  flex-col   font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto justify-between'>
                    <p className='w-full h-[20px] font-semibold'>Rainbow Fingers</p>
                    <p className='w-full h-[20px] '>Online Store</p>
                    <p className='w-full h-[20px] '>Online Guitar lessons</p>
                    <p className='w-full h-[20px] '>Community (Hub)</p>
                </div>
                {/* 2nd column */}
                <div className='flex flex-col justify-between  font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto'>
                    <p className='w-full h-[20px] font-semibold'>Careers</p>
                    <p className='w-full h-[20px] '>Privacy policy</p>
                    <p className='w-full h-[20px] '>Terms & conditions</p>
                    <p className='w-full h-[20px] '>FAQ</p>
                </div>
                {/* 3rd column */}
                <div className='flex flex-col   font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mt-2 md:mt-0 justify-between '>
                    <p className='w-full h-[20px] font-semibold leading-[13.5px]'>Follow Us</p>
                    <span className='w-full md:w-[60%] flex justify-between'>
                        <Link href='/'>
                            <BsTwitterX
                                size={20}
                            />
                        </Link>
                        <Link href='https://www.instagram.com/rainbowfingersacademy?igsh=cjg4ZTZsZzA2dXcw'>
                            <AiFillInstagram
                                size={20}
                            />
                        </Link>
                        <Link href='https://www.facebook.com/share/pjZBbDYDWsRzg8Mw/?mibextid=LQQJ4d'>
                            <FaFacebookF
                                size={20}
                            />
                        </Link>
                    </span>
                    <p className='w-full h-[20px]  '>Email:</p>
                    <p className='w-full h-[20px]  '>Mobile</p>
                </div>
            </div>
            <div className='py-10 mx-auto mt-5 mb-0'>
                <p className='text-center text-xs '>&copy;{currentYear()} Rainbow Fingers. All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer