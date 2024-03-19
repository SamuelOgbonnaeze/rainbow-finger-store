import getProducts from "@/app/api/get-products";
import getSizes from "@/app/api/get-sizes";

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

    const sizes= await getSizes();
    
   

    return (
        <div>
            Category page
        </div>
    );
}

export default CategoryPage;