import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
       
        return data; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getCategories;