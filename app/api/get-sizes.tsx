import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    try {
        // Fetch sizes from the API
        const res = await fetch(URL);
        const sizes = await res.json();

        // Check if sizes is an array and has at least one element
        if (!Array.isArray(sizes) || sizes.length === 0) {
            throw new Error("Sizes not found");
        }

        return sizes;
    } catch (error) {
        // Log the error
        console.error("Error fetching sizes:", error);
        
        // Return an empty array in case of an error
        return [];
    }
};

export default getSizes;
