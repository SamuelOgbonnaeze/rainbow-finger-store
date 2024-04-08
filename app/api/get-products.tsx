import { Product, Category, Size, Brand, Color, Image } from "@/types";

interface Query {
    categoryId?: string;
    colorId?: string;
    brandId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
    try {
        // Construct the URL with query parameters
        const queryParams = `?${Object.entries(query)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
            .join("&")}`;
        const productsUrl = `${URL}${queryParams}`;

        // Fetch products from the API
        const response = await fetch(productsUrl);
        const products = await response.json();

        // Check if products is an array and has at least one element
        if (!Array.isArray(products) || products.length === 0) {
            throw new Error("Products not found");
        }

        // Map the fetched products to the Product type
        const mappedProducts = mapProductsToProductType(products);

        // Return the mapped products
        return mappedProducts;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of an error
    }
};

// Map the fetched products to the Product type
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
