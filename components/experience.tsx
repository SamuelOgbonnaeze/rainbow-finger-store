import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Store from '../public/images/Store.png'
import TutorialVideo from '../public/images/Tutorial-videos.png'
import CommunityRating from '../public/images/community-ratings.png'
import Link from 'next/link'

interface CardProps {
    image: StaticImageData,
    title: string,
    description: string
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className='w-full flex flex-col mx-auto'>
            <Image src={image} width={76.75} height={73} alt='icon' className='mx-auto' />
            <p className='w-[90%] mx-auto mt-[47px] font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#050304]'>{title}</p>
            <p className='w-[90%] mx-auto mt-[24px] text-[14px] md:text-[16px] lg:text-[18px]  text-[#2F3437]'>{description}</p>
        </div>

    );
}

const Experience = () => {
    return (
        <div className=' justify-center font-nunito text-[#050304] '>
            {/* Heading */}
            <div className='mt-10 w-full mx-auto opacity-500 '>
                <div className='bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center'>
                    <div className='py-2 w-[80%] mx-auto text-3xl md:text-5xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] text-center'>
                        <p className='font-light'>Experience the Power of Music with <span className='font-medium text-[#D2AE00]'>Rainbow Fingers</span></p>
                    </div>
                </div>
            </div>
            {/* paragraph text */}
            <div className=' w-[75%] h-[57px] mx-auto mt-10 text-center'>
                <p className=' leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] font-normal'>From guitars and accessories to expert guitar classes, we are passionate about helping you achieve your musical goals.</p>
            </div>
            {/* Cards */}
            <div className='w-full mx-auto mt-10 justify-center  '>
                <div className='w-[90%] mx-auto flex flex-col md:flex-row  justify-between gap-8'>
                    <Card
                        image={Store}
                        title='Store Guitar/Accessories'
                        description='Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.'
                    />
                    <Card
                        image={TutorialVideo}
                        title='Tutorial videos'
                        description='Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.'
                    />
                    <Card
                        image={CommunityRating}
                        title='Community reviews'
                        description='Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.'
                    />

                </div>
                {/* get started button */}

                <Link href='/product' className='' >
                    <div className='w-[250px] mt-10 md:w-[393px] h-[46px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] hover:bg-[#E24F29] group cursor-pointer hover:scale-105 ease-in-out duration-300 flex items-center'>
                        <div className=' flex items-center h-[20px] mx-auto '>
                            <button className='font-medium font-nunito text-[14px] md:text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white'>
                                Get started now
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Experience