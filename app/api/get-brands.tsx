import { Brand } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/brands`;

const getBrands = async (): Promise<Brand[]> => {
    try {
        const data = await fetch(URL);
        const brands = await data.json();

        // Check if brands is an array and has at least one element
        if (!Array.isArray(brands) || brands.length === 0) {
            throw new Error("Brands not found");
        }

        return brands; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching brands:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getBrands;
