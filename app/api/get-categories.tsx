
import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await fetch(URL);
        const data = await res.json();

        // Check if categories is an array and has at least one element
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Categories not found");
        }

        return data; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getCategories;
