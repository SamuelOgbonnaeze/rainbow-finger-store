import prismadb from "@/lib/prismadb";
import { Brand } from "@/types";

const getBrands = async (): Promise<Brand[]> => {
    try {
        const brands = await prismadb.brand.findMany();

        // Check if sizes is an array and has at least one element
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
