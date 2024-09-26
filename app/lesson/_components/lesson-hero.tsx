import Button from "@/components/ui/button";
import LessonHeroImage from '@/public/images/lesson-hero-image.png'

import Link from "next/link";
import Image from 'next/image';

const LeftSection = () => {
        return (
            <div className='md:w-[50%] flex flex-col pt-[100px] md:pt-[50px] pl-[100px]'>
                <div className='text-[#050304] py-14 md:py-24 lg:py-16 px-2'>
                    <h2 className='font-light text-4xl lg:text-7xl'>Elevate your playing with <span className='text-[#F2994A] font-medium'>Professionals</span></h2>
                    <p className='w-[80%] md:w-full font-hanken font-normal text-[18px] mt-4'>Explore our extensive range of guitars classes  and elevate your playing with our professional instructors.</p>
    
                </div>
                <div className='flex justify-between mb-6'>
    
                    <Link href="/product">
                        <div className='flex w-[200px] md:w-[295px] lg:h-[48px]'>
                            <Button className='flex items-center w-full h-full bg-[#E24F29] px-3 text-white rounded-[60px] gap-[10px] py-2 lg:py-3 '>
                           <p className="font-nunito text-[16px] md:text-[18px] mx-auto">Get started now</p>
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }


const RightSection = () => {
    return (
        <div className='md:w-[50%] h-full'>
            <div className='w-full m-0 p-0 md:flex'>
                <Image src={LessonHeroImage} alt='Hero-Image' width={680} height={700} className='w-full h-full  ' />
            </div>
        </div>
    );
}



const LessonHero= ()=>{
    return(
        <div className="flex items-center justify-between ">
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default LessonHero;


// 
// import Image from 'next/image';
// import Link from 'next/link';
// import { BsSearch } from 'react-icons/bs';
// import HeroImage from '../public/images/hero-image-1.png';
// import { ShoppingCart } from 'lucide-react';


// const MiddleSection = () => {
//     return (
//         <div className='lg:w-[30%]'>
//             <div className='w-full m-0 p-0 hidden lg:flex'>
//                 <Image src={HeroImage} alt='Hero-Image' className='w-full h-full' />
//             </div>
//         </div>
//     );
// }

// const RightSection = () => {
//     return (
//         <div className='w-full md:w-[45%] lg:w-[30%] flex flex-col md:pt-[50px] px-6 '>
//             <div className="flex items-center md:gap-[30px] top-[207px] w-[95%] mx-auto md:w-[308px] h-[200px] md:h-full">
//                 <div className='flex w-full md:flex-col gap-y-6 justify-between items-center h-full'>
//                     <div className='hover:scale-105 ease-in-out duration-300 items-center'>
//                         <HeroText text='Guitar lessons' />
//                     </div>
//                     <div className='hover:scale-105 ease-in-out duration-300'>
//                         <HeroText text='Guitar' />
//                     </div>
//                     <div className='hover:scale-105 ease-in-out duration-300'>
//                         <HeroText text='Accessories' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// const Hero = () => {
//     return (
//         <div className='w-full gradient justify-between'>
//             <div className='container flex flex-col md:flex-row items-center mx-auto'>
//                 <LeftSection />
//                 <MiddleSection />
//                 <RightSection />
//             </div>
//         </div>
//     );
// }




// export default Hero;
