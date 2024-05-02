"use client"

import { MouseEventHandler } from "react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";


import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";



interface ProductCardProps {
    data: Product;
}



const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()

    const handleClick = () => {
        router.push(`/product/${data.id}`);
        console.log("Handle click is clicked")
    };


    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data)
        console.log("onPreview is clicked")
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data)
        console.log("onAddToCart  is clicked")
    }

    return (


        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:scale-105 ">
            {/* Images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    sizes="w-[290px] h-[290px]"
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600 expand-icon" />} // Add a class name
                        />

                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-600">
                        {data.brand?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        {data.category?.name}
                    </p>
                </div>
            </div>

            {/* Prices */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>

    );
}

export default ProductCard;