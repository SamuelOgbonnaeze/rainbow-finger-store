// app/lesson_components/LessonHero.tsx

"use client";

import Button from "@/components/ui/button";
import LessonHeroImage from '@/public/images/lesson-hero-image.png';
import Link from "next/link";
import Image from 'next/image';
import { SignedOut, SignInButton } from "@clerk/nextjs";

interface LessonHeroProps {
    isSignedIn: Boolean;
}


const LessonHero = ({ isSignedIn }: LessonHeroProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-200 lg:text-[#050304]">
            <div className='w-full lg:w-[50%] flex flex-col pt-[60px] lg:pt-[50px] lg:pl-[100px] relative h-full overflow-hidden'>
                <div className='flex lg:hidden absolute inset-0 bg-black opacity-50 -z-10 h-full w-full'></div>
                <div className='w-full lg:hidden absolute -z-20 m-0 p-0 h-full overflow-hidden'>
                    <Image src={LessonHeroImage} alt='Hero-Image' className='w-full h-full object-cover' />
                </div>

                <div className='flex w-full flex-col gap-y-8 mt-40 md:mt-0 md:py-14 lg:py-16 px-2 relative z-10'>
                    <h2 className='font-bold text-4xl lg:text-7xl leading-snug md:leading-normal'>
                        Elevate your playing with <span className='text-[#F2994A] font-medium'>Professionals</span>
                    </h2>
                    <p className='w-[90%] md:w-full font-hanken font-normal text-[16px] md:text-[18px] mt-4'>
                        Explore our extensive range of guitar classes and elevate your playing with our professional instructors.
                    </p>
                </div>

                <div className='flex justify-start md:justify-between mb-6 relative z-10 py-12'>
                    {isSignedIn ? (
                        <Link href="/product">
                            <div className='flex w-[180px] md:w-[250px] lg:w-[295px] lg:h-[48px]'>
                                <Button className='flex items-center w-full h-full bg-[#E24F29] px-4 text-white rounded-[60px] gap-[10px] py-2 lg:py-3'>
                                    <p className="font-nunito text-[14px] md:text-[16px] lg:text-[18px] mx-auto">Get started now</p>
                                </Button>
                            </div>
                        </Link>
                    ) : (

                        <div className='flex flex-col w-[180px] md:w-[250px] lg:w-[295px] lg:h-[48px]'>
                            <Button>
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                            </Button>
                        </div>

                    )}
                </div>
            </div>

            <div className='hidden lg:flex w-full lg:w-[50%] h-full overflow-hidden'>
                <div className='w-full m-0 p-0'>
                    <Image src={LessonHeroImage} alt='Hero-Image' width={680} className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default LessonHero;
