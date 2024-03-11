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
    
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;