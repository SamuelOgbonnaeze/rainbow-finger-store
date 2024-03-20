
import prismadb from "@/lib/prismadb";


// Define async function to fetch product by ID
const getProduct = async (id: string): Promise<any> => {
    try {
        // Fetch product from database
        const res = await prismadb.product.findUniqueOrThrow({
            where: {
                id: id,
            },
            // Include related entities in the response
            include: {
                category: true,
                size: true,
                brand: true,
                color: true,
                images: true,
            }
        });

        // Check if product was found
        if (!res) {
            // If product not found, throw an error
            throw new Error("Product not found");
        }

        // Return the fetched product
        return res;
    } catch (error) {
        // Log the actual error received from Prisma
        console.error("Error fetching Product:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

// Export the getProduct function
export default getProduct;
