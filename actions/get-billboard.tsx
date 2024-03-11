import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch billboard");
        }

        const data = await res.json();
        return data; // Returning the fetched data
    } catch (error) {
        console.log("Error fetching billboard:", error);
        throw new Error("Error fetching billboard"); // Throw an error object instead of returning a string
    }
};

export default getBillboard;