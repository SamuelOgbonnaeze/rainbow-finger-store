import prismadb from "@/lib/prismadb";
import { Billboard } from "@/types";


const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await prismadb.billboard.findUnique({
            where: {
                id: id,
            }
        });

        if (!res) {
            throw new Error("Billboard not found");
        }

        return res; // Returning the fetched data
    } catch (error) {
        console.log("Error fetching billboard:", error);
        throw new Error("Error fetching billboard"); // Throw an error object instead of returning a string
    }
};

export default getBillboard;
