import { Suspense, lazy } from 'react';

import getBrands from "@/app/api/get-brands";
import getColors from "@/app/api/get-colors";
import getProducts from "@/app/api/get-products";
import getSizes from "@/app/api/get-sizes";



import ProductHero from "./components/product-hero";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import Filter from "@/components/filter";
import getCategories from "@/app/api/get-categories";
import ProductMobileFilters from "./components/product-mobile-filters";
import { SkeletonCard } from '@/components/skeleton-card';

const ProductCard = lazy(() => import('@/components/ui/product-card'));

export const revalidate = 0;

interface ProductPageProps {
    searchParams: {
        categoryId: string,
        brandId: string;
        colorId: string;
        sizeId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ searchParams }) => {

    const products = await getProducts({
        categoryId: searchParams.categoryId,
        brandId: searchParams.brandId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })

    const categories = await getCategories();
    const sizes = await getSizes();
    const brands = await getBrands();
    const colors = await getColors();

    return (
        <div>
            <ProductHero />
            <Container>
                <div className="pt-20">
                    <div className="px-4 sm:px-6 lg:px-8 pb-24">
                        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                            {/* Add Mobile Filters */}
                            <ProductMobileFilters brands={brands} sizes={sizes} colors={colors} categories={categories} />
                            {/* Add Desktop Filters */}
                            <div className="hidden lg:block">
                                <Filter
                                    valueKey="categoryId"
                                    name="Categories"
                                    data={categories}
                                />
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
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {products.map((item) => (
                                        <div key={item.id}>
                                            <Suspense fallback={<SkeletonCard />}>
                                                <ProductCard
                                                    key={item.id}
                                                    data={item}
                                                />
                                            </Suspense>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default ProductPage;