import prismadb from "@/lib/prismadb";
import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
    try {
        const colors = await prismadb.color.findMany();

        // Check if categories is an array and has at least one element
        if (!Array.isArray(colors) || colors.length === 0) {
            throw new Error("Colors not found");
        }

        return colors; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching colors:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getColors;