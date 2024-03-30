"use client"

import { useEffect, useState } from "react";


const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div>


            Cart Page
        </div>
    );
}

export default CartPage;