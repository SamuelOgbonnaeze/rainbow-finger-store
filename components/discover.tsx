"use client"

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'


import Image from 'next/image'

import { Billboards } from './discover-billboard-component'
import { Product } from './discover-product-component'


interface DiscoverProps {
    data: Category[];
}



const Discover: React.FC<DiscoverProps> = ({
    data
}) => {

    const pathname = usePathname();


    const routes = data.map((route) => ({
        href: `category/${route.id}`,
        label: route.name,
        active: pathname === `category/${route.id}`
    }))



    return (
        <div className='w-full text-[#050304] font-nunito '>
            {/* discover Heading */}
            <div className='mt-10 w-full  opacity-500 mx-auto '>
                <div className='bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center'>
                    <div className='py-2 w-[80%] mx-auto text-3xl md:text-5xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] text-center'>
                        <p className='font-light'>Discover Your Perfect Guitar at <span className=' text-[#0000D2] font-medium'>Rainbow Fingers</span></p>
                    </div>
                </div>
            </div>

            {/* Discover paragraph */}
            <div className='mt-10 w-[80%]  mx-auto text-center'>
                <p className='leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] font-normal'>Explore our extensive selection of high-quality electric, acoustic, and classical guitars, and find the one that best suits your style and budget.</p>
            </div>

            {/* Discover Guitar */}
            <div className='w-[350px] md:w-[629px]  grid grid-cols-2 md:grid-cols-3 gap-[29px] mt-5 md:mt-10 mx-auto justify-between '>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                    >
                        <div className={cn(' h-[50px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:text-[#E24F29] hover:border-solid hover:border-b-[4px] justify-center flex  group ',
                            route.active ? "border-[#DF3B11] text-[#E24F29]" : "text-[#363F5E]"
                        )}>
                            <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px]text-center font-nunito font-normal  '>{route.label}</p>
                        </div>
                    </Link>
                ))}

            </div>

            {/* Discover Billboard */}
            <div>
                <Billboards />
            </div>

            {/* Product List  */}
            <div>
                <Product />
            </div>


            {/* go to store button */}

            <div className='w-[250px] mt-10 md:w-[393px] h-[46px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] hover:bg-[#E24F29] group cursor-pointer hover:scale-105 ease-in-out duration-300 flex items-center'>
                <div className=' flex items-center h-[20px] mx-auto '>
                    <Link href='/product' className='' >
                        <button className='font-medium font-nunito text-[14px] md:text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white'>Go to store</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Discover