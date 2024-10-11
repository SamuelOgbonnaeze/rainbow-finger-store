import { useState, useEffect } from "react";


import { ShoppingCart } from "lucide-react";


import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import useCourseCart from "@/hooks/use-course-cart";
import Button from "@/components/ui/button";

const LessonNavbarActions = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const cart = useCourseCart()

    if (!isMounted) {
        return null;
    }


    return (
        <div className="flex flex-col lg:flex-row items-center gap-x-3">
            <div className="text-gray-400">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

            <Button onClick={() => router.push("/lesson/cart")} className='flex items-center rounded-full px-4 py-2 bg-white'>
                <ShoppingCart
                    size={20}
                    color='black'
                    className='hover:text-[#DF3B11]'
                />
                <span className='ml-2 font-medium text-sm text-black'>
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default LessonNavbarActions;
