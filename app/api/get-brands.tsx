import prismadb from "@/lib/prismadb";
import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
    try {
        const categories = await prismadb.category.findMany({
            include: {
                billboard: true // Include the billboard information for each category
            }
        });

        // Check if categories is an array and has at least one element
        if (!Array.isArray(categories) || categories.length === 0) {
            throw new Error("Categories not found");
        }

        return categories; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getCategories;
