import Link from "next/link";

import { Billboards } from "./discover-billboard-component";
import { Product } from "./discover-product-component";

const HomeProductDisplay = () => {
    return (
        <>
            {/* Discover Billboard */}
            <div>
                <Billboards />
            </div>

            {/* Product List  */}
            <div>
                <Product />
            </div>

            {/* go to store button */}

            <div className='w-[250px] mt-10 md:w-[393px] h-[46px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] hover:bg-[#E24F29] group cursor-pointer hover:scale-105 ease-in-out duration-300 flex items-center'>
                <div className=' flex items-center h-[20px] mx-auto '>
                    <Link href='/product'  className='' >
                        <button className='font-medium font-nunito text-[14px] md:text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white'>Go to store</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HomeProductDisplay;