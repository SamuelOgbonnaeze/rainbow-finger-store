"use client"

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: 'NGN',
});

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || !value) {
        return null;
    }
    return (
        <div className="font-medium text-md md:text-sm text-slate-700">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;