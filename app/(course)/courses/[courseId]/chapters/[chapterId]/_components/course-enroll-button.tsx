"use client"

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCourseCart from "@/hooks/use-course-cart";
import prismadb from "@/lib/prismadb";
import { Course } from "@/types";
import { redirect } from "next/navigation";
import { MouseEventHandler } from "react";

interface CourseEnrollButtonProps {
    courseId: string;
    price: number;
    data:Course;
}


const CourseEnrollButton =  ({ courseId, price,data }: CourseEnrollButtonProps) => {
    const cart = useCourseCart();

    

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data)
        console.log(data)
        console.log("onAddToCart  is clicked")
    }

    return (
        <Button onClick={onAddToCart} className="w-full md:w-auto flex justify-center">
            <span className="flex items-center text-center gap-x-2 group">
                Enroll for {<Currency value={price} className="text-white group-hover:text-[#E24F29]" />}
            </span>

        </Button>
    );
}

export default CourseEnrollButton;


// 