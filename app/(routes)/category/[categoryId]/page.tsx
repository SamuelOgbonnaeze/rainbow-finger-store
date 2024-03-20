import getBrands from "@/app/api/get-brands";
import getCategory from "@/app/api/get-category";
import getColors from "@/app/api/get-colors";
import getProducts from "@/app/api/get-products";
import getSizes from "@/app/api/get-sizes";
import Container from "@/components/ui/container";
import Filter from "@/app/(routes)/category/components/filter";

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
                pdi
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add Filters */}
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;