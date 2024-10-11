
import { auth } from "@clerk/nextjs/server";
import CartPageClient from "./components/cart-page-client";

const CartPage = async () => {
    const { userId } = auth(); // You can only call this in the server component.

    return (
        <CartPageClient userId={userId} />
    );
};

export default CartPage;