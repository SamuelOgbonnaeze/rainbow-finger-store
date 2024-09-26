import Image, { StaticImageData } from 'next/image'


interface CardProps {
    image: StaticImageData,
    title: string,
    description: string
}

export const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className='w-full flex flex-col mx-auto'>
            <Image src={image} width={76.75} height={73} alt='icon' className='mx-auto' />
            <p className='w-[90%] mx-auto mt-[47px] font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#050304]'>{title}</p>
            <p className='w-[90%] mx-auto mt-[24px] text-[14px] md:text-[16px] lg:text-[18px]  text-[#2F3437]'>{description}</p>
        </div>

    );
}