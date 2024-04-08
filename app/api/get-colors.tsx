import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        // Check if data is an array and has at least one element
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Colors not found");
        }

        return data; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching colors:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getColors;
