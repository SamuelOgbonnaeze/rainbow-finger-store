"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: 'NGN',
});

interface CurrencyProps {
    value?: string | number;
    className?: string;
}

const Currency: React.FC<CurrencyProps> = ({
    value,className
}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || !value) {
        return null;
    }
    return (
        <div className={cn(
            "font-medium text-md md:text-sm",
            className
        )}>
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;