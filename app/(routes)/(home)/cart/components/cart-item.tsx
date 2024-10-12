import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types";

import useCart from "@/hooks/use-cart";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency"

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {

    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                {data.images && data.images.length > 0 ? (
                    <Image
                        fill
                        src={data.images[0].url}
                        alt="Product Image"
                        className="object-cover object-center"
                    />
                ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
            </div>
            <div className="relative ml-4 flex flex-1 flex-col  justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="sm:py-8 items-center">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pr-0">
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-black">
                                {data.name}
                            </p>
                        </div>
                        <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{data.brand?.name}</p>
                            <p className="text-gray-500 ml-2 border-l border-gray-300 pl-4">{data.color?.name}</p>
                            <p className="text-gray-500 ml-2 border-l border-gray-300 pl-4">{data.size?.name}</p>
                        </div>
                        <Currency value={data.price} className="text-slate-700" />
                    </div>
                </div>

            </div>
        </li>
    )
}

export default CartItem;