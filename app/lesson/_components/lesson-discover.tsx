import { Card } from "@/components/card"
import Metronome from '@/public/images/metronome.png'
import Linear from '@/public/images/linear.png'
import LocationPin from '@/public/images/location-pin.png'

const LessonDiscover = () => {
    return (

        <>
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-[60px] space-y-6 md:space-y-0">
                <div className="md:w-[557px]">
                    <p className="font-nunito font-light text-[36px] md:text-[64px] leading-[40px] md:leading-[67px] p-3 text-center md:text-left">
                        Discover the Joy of <span className="text-[#DF3B11] font-medium">Playing Guitar</span>
                    </p>
                </div>
                <div className="md:w-[588px]">
                    <p className="font-hankenGrotesk font-normal text-[18px] md:text-[24px] leading-[26px] md:leading-[30px] p-3 text-center md:text-left">
                        Our courses are designed to fit your schedule and budget, so you can learn at your own pace and on your own terms.
                    </p>
                </div>
            </div>


            <div className='w-full mx-auto mt-10 md:mt-[75px] justify-center  '>
                <div className=' mx-auto flex flex-col md:flex-row  justify-between gap-8'>
                    <Card
                        image={Metronome}
                        title='Effective and efficient'

                        description='Whether you&apos;re a beginner or an experienced musician, our guitar courses offer a fun and engaging way to learn and improve your skills..'
                    />
                    <Card
                        image={Linear}
                        title='Tutorial videos'
                        description='Our courses are available online, so you can learn anytime and anywhere. With lifetime access to the course material, you can revisit lessons and practice at your own pace.'
                    />
                    <Card
                        image={LocationPin}
                        title='Community reviews'
                        description='Physical courses are also available, so you can register to be a part of these sessions.'
                    />

                </div>
            </div>
        </>
    );
}

export default LessonDiscover;