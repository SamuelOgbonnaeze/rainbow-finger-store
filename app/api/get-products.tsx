
import { Product, Category, Size, Brand, Color, Image } from "@/types";
import prismadb from "@/lib/prismadb";


interface Query {
    categoryId?: string;
    colorId?: string;
    brandId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const queryParams = {
        where: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            brandId: query.brandId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
        include: {
            category: true,
            size: true,
            brand: true,
            color: true,
            images: true,
        }
    };

    try {
        const products = await prismadb.product.findMany(queryParams);
        // Check if products is an array and has at least one element
        if (!Array.isArray(products) || products.length === 0) {
            throw new Error("Products not found");
        }

        // Assuming you have a function to map products to the Product type
        const mappedProducts = mapProductsToProductType(products);


        return mappedProducts; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of an error
    }
};

// Assuming you have a function to map products to the Product type
const mapProductsToProductType = (products: any[]): Product[] => {
    return products.map(product => ({
        id: product.id,
        category: product.category as Category, // Assuming category is of type Category
        name: product.name,
        price: product.price,
        isFeatured: product.isFeatured,
        size: product.size as Size, // Assuming size is of type Size
        brand: product.brand as Brand, // Assuming brand is of type Brand
        color: product.color as Color, // Assuming color is of type Color
        images: product.images as Image[] // Assuming images is an array of type Image
    }));
};

export default getProducts;
