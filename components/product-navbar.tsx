"use client"

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import Link from 'next/link'
import Image from 'next/image'


import Logo from '@/public/images/logo.png'
import Container from '@/components/ui/container'
import NavbarActions from '@/components/ui/navbar-actions';


const ProductNavbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
       
    }



    return (
        <div className=' relative w-full py-4 '>

            <Container>
                <div className={nav ? 'w-full h-full mx-auto flex items-center justify-between' : ' w-full h-full items-center justify-between flex'}>
                    {/* nav logo */}
                    <div className='ml-2  md:ml-6 lg:ml-[100px]'>
                        <Link href='/' className='flex items-center ml-4 lg:ml-2'>
                            <Image
                                src={Logo}
                                width={114}
                                height={47}
                                alt=''
                            />
                        </Link>
                    </div>
                    {/* Toggle button */}
                    <div className='block lg:hidden items-center text-[#FBFBFB]'>
                        {nav ? <AiOutlineClose onClick={handleNav} size={20} className='mr-28 bg-[#DF3B11] md:text-gray-100 cursor-pointer' /> : <AiOutlineMenu onClick={handleNav} size={20} className='mr-16 text-[#DF3B11] cursor-pointer' />}
                    </div>
                    {/* mobile mode */}
                    <div className={nav ? 'absolute flex lg:hidden z-10 right-0 top-[0px] h-screen bg-white text-[#DF3B11] opacity-90' :
                        'absolute hidden'}>
                        <ul className='flex flex-col w-full gap-y-6 items-center mt-40 lg:justify-center text-center font-inter font-normal text-[18px] leading-[32px] p-2'>
                            <li className=' p-2 '><Link href='/Lessons'> Lessons </Link></li>
                            <li className=' p-2'><Link href='/product'> Store </Link></li>
                            <li className=' p-2 '><Link href='/'> Hub </Link></li>
                            <li>
                                <div className='mx-auto flex items-center gap-x-4'>
                                   <NavbarActions />
                                </div>
                            </li>
                        </ul>
                    </div>


                    {/* Desktop Menu */}
                    <div className={nav ? 'hidden ' : 'hidden lg:flex items-center justify-between  w-full'} >
                        {/* left side */}
                        <div className='container'>
                            <div className=' ml-[45px]  h-[32px] gap-x-[24px] items-center flex'>
                                <Link href='/Lessons' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                                    <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Lessons</p>
                                </Link>
                                <Link href='/product' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                                    <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Store</p>
                                </Link>
                                <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                                    <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Hub</p>
                                </Link>
                                <div className='ml-auto flex items-center gap-x-4'>
                                   <NavbarActions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default ProductNavbar;