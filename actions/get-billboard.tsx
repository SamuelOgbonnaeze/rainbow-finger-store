import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await fetch(`${URL}/${id}`);
        const data = await res.json();

        return data; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error("Error fetching categories"); // Throw an error object instead of returning a string
    }
};

export default getBillboard;