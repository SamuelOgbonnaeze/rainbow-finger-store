"use client"

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'


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
        <div className='w-full text-[#050304] font-nunito mb-2'>
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
            <div className='w-[350px] md:w-[650px]  grid grid-cols-2 md:grid-cols-4 gap-2 mt-5 md:mt-10 mx-auto justify-between '>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                    >
                        <div className='  w-full  px-4 py-3 gap-2 rounded-[60px] hover:border-[#DF3B11] hover:text-[#E24F29] hover:border-solid hover:border-b-2 justify-center flex  group '>
                            <p className='w-full h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal  '>{route.label}</p>
                        </div>
                    </Link>
                ))}

            </div>

            
            

          


            
        </div>
    )
}

export default Discover