"use client"
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Category } from '@/types'


import Link from 'next/link'
import Image from 'next/image'
import Sample_1 from '../public/images/sample-1.png'
import Sample_2 from '../public/images/sample-2.png'
import Sample_3 from '../public/images/sample-3.png'
import Sample_4 from '../public/images/sample-4.png'
import Ratings from '../public/images/rating.png'
import { IoIosAddCircleOutline } from 'react-icons/io'

interface DiscoverProps {
    data: Category[];
}

const Discover: React.FC<DiscoverProps> = ({
    data
}) => {

    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `category/${route.id}`
    }))



    return (
        <div className='w-full '>
            {/* discover Heading */}
            <div className='mt-[80px] w-full h-[200px] opacity-500 mx-auto '>
                <div className='bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center'>
                    <div className='mt-[33px]  w-[300px] md:w-[500px] lg:w-[841px] h-[134px] mx-auto py-2 '>
                        <p className=' font-nunito font-light text-3xl md:text-4xl lg:text-[64px] leading-10 md:leading-[57px] lg:leading-[77px] text-center text-[#050304] '>Discover Your Perfect Guitar at <span className='font-normal text-[#0000D2]'>Rainbow Fingers</span></p>
                    </div>
                </div>
            </div>
            {/* Discover paragraph */}
            <div className='lg:mt-[51px] w-[350px] md:w-[450px] lg:w-[695px] h-[57px] mx-auto'>
                <p className='font-nunito  font-normal leading-[20px] md:leading-[30px] text-[15px] md:text-[20px] text-center text-[#000000]'>Explore our extensive selection of high-quality electric, acoustic, and classical guitars, and find the one that best suits your style and budget.</p>
            </div>

            {/* Discover Guitar */}
            <div className='w-[350px] md:w-[629px] h-[50px] grid grid-cols-2 md:grid-cols-3 gap-[29px] mt-[47px] md:mt-[77px] mx-auto justify-between mb-[100px]'>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                    >
                        <div className={cn(' h-[50px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:text-[#E24F29] hover:border-solid hover:border-b-[4px]  group ',
                            route.active ? "border-[#DF3B11] text-[#E24F29]" : "text-[#363F5E]"
                        )}>
                            <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px]text-center font-nunito font-normal  '>{route.label}</p>
                        </div>
                    </Link>
                ))}
                {/* Acoustic */}
                {/* <div className=' h-[50px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px]text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Acoustic guitar</p>
                </div> */}
                {/* Electric */}
                {/* <div className=' h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Electric guitar</p>
                </div> */}
                {/* Accessories */}
                {/* <div className='col-span-2 md:col-span-1 h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] justify-center mx-auto  hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Accessories</p>
                </div> */}
            </div>

            {/* Guitar Cards */}
            <div className='mt-[51px] w-full h-[515px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] px-2 justify-between mx-auto mb-[450px] lg:mb-0'>
            

            </div>

            {/* go to store button */}

            <div className='w-[250px] md:w-[355px] h-[46px] mt-[569px] lg:mt-[109px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] justify-center hover:bg-[#E24F29] group '>
                <div className='w-[87px] h-[20px] mx-auto '>
                    <Link href='/' className='justify-center ' >
                        <button className='font-medium font-nunito  text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white '>Go to store</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Discover