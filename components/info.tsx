"use client"

import { Product } from "@/types";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart()

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data)
        console.log("onAddToCart  is clicked")
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between ">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex items-center gap-x-4" >
                <h3 className="font-semibold text-black" >Brand:</h3>
                <div>
                    {data?.brand?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4" >
                <h3 className="font-semibold text-black" >Size:</h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4" >
                <h3 className="font-semibold text-black" >Color:</h3>
                <div>
                    {data?.color?.name}
                </div>
                <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
            </div>
            {/* Add to cart button */}
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    <ShoppingCart size={20} />
                    Add to cart
                </Button>
            </div>
        </div>
    );
}

export default Info; 