import getProduct from "@/app/api/get-product";
import getProducts from "@/app/api/get-products";


import IndividualProductHero from "../components/individual-product-hero";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {

    const product = await getProduct(params.productId);

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return (
        <div>
            <IndividualProductHero />
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        {/* Info section */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                            <Info data={product} />
                        </div>
                    </div>
                </div>
                <hr className="my-10" />
                <ProductList title="More items you may like" items={suggestedProducts} />
            </Container>
        </div>
    );
}

export default ProductPage;