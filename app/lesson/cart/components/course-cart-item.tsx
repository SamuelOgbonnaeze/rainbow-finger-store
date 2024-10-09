import Image from "next/image";
import { X } from "lucide-react";
import { Course } from "@/types";


import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency"
import useCourseCart from "@/hooks/use-course-cart";


interface CourseCartItemProps {
    data: Course;
}

const CourseCartItem: React.FC<CourseCartItemProps> = ({ data }) => {

    const cart = useCourseCart();

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.imageUrl!}
                    alt="Course Image"
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col  justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="sm:py-8 items-center">
                    <div className="relative flex flex-col pr-9 gap-y-2 sm:pr-0">
                        <div className="flex justify-between">
                            <p className="text-lg font-semibold text-black">
                                {data.title}
                            </p>
                        </div>
                        <Currency value={data.price!} className="text-slate-700" />
                    </div>
                </div>

            </div>
        </li>
    )
}

export default CourseCartItem;