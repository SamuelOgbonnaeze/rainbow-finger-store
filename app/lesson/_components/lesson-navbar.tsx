"use client"

import { useState } from 'react'


import Link from 'next/link'
import Image from 'next/image'


import Logo from '@/public/images/logo.png'
import Container from '@/components/ui/container'
import NavbarActions from '@/components/ui/navbar-actions';
import { Menu, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'
import IconButton from '@/components/ui/icon-button'



const LessonNavbar = () => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false)



    return (
        <div className=' absolute z-10 w-full py-4 font-semibold '>

            <Container>
                <div className={open ? 'w-full h-full mx-auto flex items-center justify-between' : ' w-full h-full items-center justify-between flex'}>
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
                    <div onClick={onOpen} className="flex items-center gap-x-2 mr-16 lg:hidden text-[#DF3B11]">
                        <Menu size={20} />
                    </div>

                    <Dialog open={open} as="div" className="relative z-40 lg:hidden " onClose={onClose}>
                        {/* Background */}
                        <div className="fixed inset-0 bg-black bg-opacity-25 " />

                        {/* Dialog Position */}
                        <div className="fixed inset-0 z-40 flex">
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[100px] flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                                {/* Close Button */}
                                <div className="flex items-center justify-end px-4 text-[#DF3B11]">
                                    <IconButton className="border-[#DF3B11]" icon={<X size={15} onClick={onClose} />} />
                                </div>

                                {/* Mobile Navbar sections */}
                                <div className=' flex top-[0px] h-screen text-[#DF3B11] ' >
                                    <ul className='flex flex-col w-full gap-y-6 items-center mt-40 text-center font-inter font-normal text-[18px] leading-[32px] p-2'>
                                        <li className=' p-2'><Link href='/'> Home </Link></li>
                                        <li className=' p-2'><Link href='/product'> Store </Link></li>
                                        <li className=' p-2'><Link href='/lesson'> Lessons </Link></li>
                                        <li>
                                            <div className='mx-auto flex items-center gap-x-4'>
                                                <NavbarActions />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Dialog>



                    {/* Desktop Menu */}
                    <div className={open ? 'hidden ' : 'hidden lg:flex items-center justify-between text-gray-400  w-full'} >
                        {/* left side */}
                        <div className='container'>
                            <div className=' ml-[45px]  h-[32px] gap-x-[24px] items-center flex'>
                                <Link href='/product' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                                    <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Store</p>
                                </Link>
                                <Link href='/lesson' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                                    <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Lessons</p>
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

export default LessonNavbar;