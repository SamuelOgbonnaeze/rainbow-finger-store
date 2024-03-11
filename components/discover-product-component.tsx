import getProducts from "@/app/api/get-products";

import ProductList from "@/components/product-list";

export const revalidate = 0

export const Product = async () => {
    const products = await getProducts({ isFeatured: true })

    return (
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6 ">
            <ProductList  title="Featured Products" items={products} />
        </div>
    )
}