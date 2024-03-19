import prismadb from "@/lib/prismadb";
import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
    try {
        const size = await prismadb.size.findMany();

        // Check if sizes is an array and has at least one element
        if (!Array.isArray(size) || size.length === 0) {
            throw new Error("Sizes not found");
        }

        return size; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching sizes:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getSizes;
