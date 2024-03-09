import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";


import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const Billboards = async () => {

    const billboard = await getBillboard("43a07cf8-11ca-425d-9199-bd2b887c69e6");

    return (
        <div>
            <Billboard data={billboard} />
        </div>
    );
}

export const Product = async () => {
    const products = await getProducts({ isFeatured: true })

    return (
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6 ">
            <ProductList title="Featured Products" items={products} />
        </div>
    )
}