import { Product } from "@/types";

// Define async function to fetch product by ID
const getProduct = async (id: string): Promise<Product> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;

    try {
        // Fetch product from the database
        const res = await fetch(URL);
        const product = await res.json();

        // Check if product was found
        if (!product) {
            // If product not found, throw an error
            throw new Error("Product not found");
        }

        // Return the fetched product
        return product;
    } catch (error) {
        // Log the error
        console.error("Error fetching Product:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

// Export the getProduct function
export default getProduct;
