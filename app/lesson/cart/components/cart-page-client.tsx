"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import useCourseCart from "@/hooks/use-course-cart";
import CourseCartItem from "./course-cart-item";
import CourseSummary from "./course-cart-summary";


interface CartPageClientProps {
    userId: string | null; // Ensure this can be null
}

const CartPageClient = ({ userId }: CartPageClientProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cart = useCourseCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold mt-5">Your course checkout</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && (
                                <p className="text-neutral-500">There are no items currently in your cart</p>
                            )}
                            <ul>
                                {cart.items.map((item) => (
                                    <CourseCartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                        {/* Only render CourseSummary if userId exists */}
                        {userId ? (
                            <CourseSummary userId={userId} />
                        ) : (
                            <p>Please log in to proceed with checkout.</p>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPageClient;
