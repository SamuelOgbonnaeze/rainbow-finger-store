import { Billboard } from "@/types";

const getBillboard = async (id: string): Promise<Billboard> => {
    // Construct the URL for fetching billboard data
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`;

    try {
        // Fetch billboard data from the API
        const res = await fetch(URL);
        const billboard = await res.json();

        // Check if the response contains data
        if (!billboard) {
            throw new Error("Billboard not found");
        }

        // Return the fetched billboard data
        return billboard;
    } catch (error) {
        console.error("Error fetching billboard:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

export default getBillboard;
