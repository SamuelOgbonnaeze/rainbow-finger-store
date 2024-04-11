"use client "

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import Currency from "@/components/ui/currency";
import { PaystackButton } from "react-paystack";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment successful");
            removeAll();
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong");
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);
    const amount = totalPrice * 100;

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');

    const resetForm = () => {
        setEmail('');
        setFirstname('');
        setLastname('')
        setPhone('');
    };

    const componentProps = {
        email,
        amount,
        firstname,
        lastname,
        phone,
        metadata: { 
            custom_fields: [
                // Add any custom fields if needed
              ]
        },
        publicKey,
        text: 'Pay now',
        onSuccess: () => {
            console.log("Metadata:", componentProps.metadata);
            toast.success("Your purchase was successful! Thank you for doing business with us");
            resetForm();
        },
        onClose: () => toast.error("Wait! Purchase not completed yet"),
    };

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.DATABASE_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        });

        window.location = response.data.url
    }

    return (
        <div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 bg-[#df3b11] bg-opacity-70 text-white">
            <h2 className="text-lg font-medium ">Order Checkout</h2>
            <div className="mt-6 space-y-4">
                <div className="flex flex-col items-center justify-between border-t border-gray-200 ">
                    <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
                        <span className="sm:w-[150px]" >
                            <label>First Name:</label>
                        </span>
                        <input
                            type="text"
                            id="name"
                            value={firstname}
                            className="w-full rounded-full px-4 text-black text-sm font-light"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>

                    <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
                        <span className="sm:w-[150px]" >
                            <label>Last Name:</label>
                        </span>
                        <input
                            type="text"
                            id="name"
                            value={lastname}
                            className="w-full rounded-full px-4 text-black text-sm font-light"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>

                    <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
                        <span className="sm:w-[150px]" >
                            <label>Email:</label>
                        </span>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            className="w-full rounded-full px-4 text-black text-sm font-light"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
                        <span className="sm:w-[150px]">
                            <label>Phone:</label>
                        </span>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            className="w-full rounded-full px-4 text-black"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between  border-gray-200 pt-4">
                    <div className="text-base font-medium ">Order total:</div>
                    <Currency value={amount / 100} />
                </div>
            </div>
            <PaystackButton {...componentProps} className="cursor-pointer text-center text-xs leading-tight tracking-wider text-white font-bold w-full h-14 focus:outline-none mt-16 rounded-full bg-[#E24F29] border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-85 transition hover:text-[#E24F29] hover:bg-white" />
        </div>
    );
}

export default Summary;
