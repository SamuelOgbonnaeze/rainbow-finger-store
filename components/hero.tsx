
import Image from 'next/image';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import HeroImage from '../public/images/hero-image-1.png';

interface HeroLinkProps {
    text: string
}

const HeroLink: React.FC<HeroLinkProps> = ({ text }) => {
    return (
        <div className='w-[100px] flex items-center md:w-[308px] h-[105px] lg:h-[112px] text-center rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
            <p className='w-[80%] mx-auto lg:leading-[64px] text-[#FBFBFB] font-light font-nunito'>{text}</p>
        </div>
    );
}

const LeftSection = () => {
    return (
        <div className='md:w-[50%] lg:w-[32%] flex flex-col pt-[150px] md:pt-[50px]'>
            <div className='text-[#050304] py-14 md:py-24 lg:py-16 px-2'>
                <h2 className='font-bold text-4xl lg:text-7xl'>Play Like a <span className='text-[#E24F29]'>Pro</span></h2>
                <p className='w-[80%] md:w-full font-hanken font-normal text-[18px] mt-4'>Find the perfect guitar and accessories and take your skills to the next level with expert guitar classes and repair services.</p>

            </div>
            <div className='flex justify-between mb-6'>
               
                <Link href="/product">
                    <div className='flex w-[200px] lg:w-[295px] lg:h-[48px] justify-normal'>
                        <button className='w-full h-full bg-[#E24F29] px-3 text-white rounded-[60px] gap-[10px] py-2 lg:py-3 font-nunito text-[16px] md:text-[18px]'>Start shopping now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

const MiddleSection = () => {
    return (
        <div className='lg:w-[30%]'>
            <div className='w-full m-0 p-0 hidden lg:flex'>
                <Image src={HeroImage} alt='Hero-Image' className='w-full h-full' />
            </div>
        </div>
    );
}

const RightSection = () => {
    return (
        <div className='w-full md:w-[45%] lg:w-[30%] flex flex-col md:pt-[50px] px-6 '>
            <div className="flex items-center md:gap-[30px] top-[207px] w-[95%] mx-auto md:w-[308px] h-[200px] md:h-full">
                <div className='flex w-full md:flex-col gap-y-6 justify-between items-center h-full'>
                    <Link href="/Lessons" className='hover:scale-105 ease-in-out duration-300 items-center'>
                        <HeroLink text='Guitar lessons' />
                    </Link>
                    <Link href="/" className='hover:scale-105 ease-in-out duration-300'>
                        <HeroLink text='Guitar' />
                    </Link>
                    <Link href="/" className='hover:scale-105 ease-in-out duration-300'>
                        <HeroLink text='Accessories' />
                    </Link>
                </div>
            </div>
        </div>
    );
}


const Hero = () => {
    return (
        <div className='w-full gradient justify-between'>
            <div className='container flex flex-col md:flex-row items-center mx-auto'>
                <LeftSection />
                <MiddleSection />
                <RightSection />
            </div>
        </div>
    );
}




export default Hero;
