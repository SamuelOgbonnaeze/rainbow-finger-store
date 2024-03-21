import getBrands from "@/app/api/get-brands";
import getCategory from "@/app/api/get-category";
import getColors from "@/app/api/get-colors";
import getProducts from "@/app/api/get-products";
import getSizes from "@/app/api/get-sizes";


import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import Filter from "../components/filter";
import MobileFilters from "../components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        brandId: string;
        colorId: string;
        sizeId: string;
    }
}


const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        brandId: searchParams.brandId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })

    const sizes = await getSizes();
    const brands = await getBrands();
    const colors = await getColors();
    const category = await getCategory(params.categoryId)



    return (
        <div className="bg-white">
            <Container>
                {/* Add the hero section */}
                Category page navbar

                {/* main section */}
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add Mobile Filters */}
                        <MobileFilters brands={brands} sizes={sizes} colors={colors} />
                        {/* Add Desktop Filters */}
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="brandId"
                                name="Brands"
                                data={brands}
                            />
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;