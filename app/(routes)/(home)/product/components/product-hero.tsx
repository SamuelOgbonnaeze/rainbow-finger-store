import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import ProductImg1 from '@/public/images/proimg1.png';
import ProductImg2 from '@/public/images/proimg2.png';
import ProductImg3 from '@/public/images/proimg3.png';
import ProductImg4 from '@/public/images/proimg4.png';
import ProductImg5 from '@/public/images/proimg5.png';

const ImageCard = ({ img, caption }: { img: StaticImageData; caption: string }) => (
    <div className='flex flex-col py-2 items-center gap-4 hover:scale-105 '>
        <Image src={img.src} width={100} height={100} alt="Image" className='w-[70px] md:w-[100px] lg:w-[140px]' />
        <p className='font-nunito font-normal text-[10px] md:text-[14px] lg:text-[20px] leading-[19px] text-[#050304]'>
            {caption}
        </p>
    </div>
);

const ProductHero = () => (
    <div>
        {/* Background image */}
        <div className='w-full h-[300px] md:h-[500px] mx-auto bg-[url("/images/producthero.png")] bg-cover bg-no-repeat bg-center text-white'></div>
        {/* Product Overview */}
        <div className='w-full sm:w-[80%] h-[150px] md:h-[240px] rounded-[150px] flex items-center mx-auto mt-[-115px] bg-white shadow-xl'>
            <div className='w-[90%] h-[70%] flex justify-between mx-auto text-center '>
                {[ProductImg5, ProductImg2, ProductImg3, ProductImg4].map((img, index) => (
                        <ImageCard key={index} img={img} caption={['Acoustic Guitar', 'Electric Guitar', 'Accessories', 'Amp'][index]} />
                ))}
            </div>
        </div>
    </div>
);

export default ProductHero;
