import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";

import { ShoppingCart } from "lucide-react";

import Button from "./button";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const cart = useCart()

    if (!isMounted) {
        return null;
    }


    return (
        <div>
            <Button onClick={() => router.push("/cart")} className='flex items-center rounded-full px-4 py-2 bg-white'>
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

export default NavbarActions;
