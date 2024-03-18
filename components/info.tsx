import { Product } from "@/types";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
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
                <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                <div>
                    {data?.color?.name}
                </div>
            </div>
            {/* Add to cart button */}
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to cart
                </Button>
            </div>
        </div>
    );
}

export default Info; 