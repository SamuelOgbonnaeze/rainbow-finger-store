import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const LessonBanner = () => {
    const { userId } = auth()

    return (
        <div className=' justify-center font-nunito text-[#050304] '>
            {/* Heading */}
            <div className='mt-10 w-full mx-auto opacity-500 '>
                <div className='bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
                    <div className='py-2 w-[80%] mx-auto text-3xl md:text-5xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] text-center'>
                        <p className='font-light'>Become a  <span className='font-medium text-[#009B00]'>Guitar Virtuoso</span></p>
                    </div>
                </div>
            </div>
            
            {/* paragraph text */}
            <div className=' w-[90%] h-[57px] mx-auto mt-10 text-center'>
                <p className=' leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] font-normal'>Learn from the best with our online guitar courses, designed to help you master the instrument and take your playing to the next level.</p>
            </div>

            {!userId && (
                <div className='bg-[url("/images/virtuoso_guitar.png")] bg-cover bg-no-repeat bg-center items-center h-[480px] w-full rounded-md '>
                    <div className="text-white flex flex-col  pt-[180px] pl-[84px] ">
                        <h2 className="font-nunito font-normal text-[64px] leading-[77px] p-3 ">My learning</h2>
                        <p className="font-nunito font-normal text-[20px] leading-[31px] p-3 " >Courses & Wishlist</p>
                    </div>

                    <div className="text-white pr-6 text-right mt-8 ">
                        <Button>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                        </Button>
                    </div>
                </div>
            )}

<Separator className="my-10" />

        </div>
    );
}

export default LessonBanner;