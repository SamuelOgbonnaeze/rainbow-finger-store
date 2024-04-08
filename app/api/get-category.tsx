import { Category } from "@/types";

// Define async function to fetch product by ID
const getCategory = async (id: string): Promise<Category> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`;

    try {
        // Fetch product from database
        const res = await fetch(URL);
        const data = await res.json();

        // Check if category was found
        if (data === null || data === undefined) {
            // If category not found, throw an error
            throw new Error("Category not found");
        }

        // Return the fetched category
        return data;
    } catch (error) {
        // Log the actual error received from the fetch call
        console.error("Error fetching category:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

// Export the getCategory function
export default getCategory;
