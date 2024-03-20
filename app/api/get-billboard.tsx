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
        // Log the actual error received from Prisma
        console.error("Error fetching billboard:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

export default getBillboard;
