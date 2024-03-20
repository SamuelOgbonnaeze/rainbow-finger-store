import prismadb from "@/lib/prismadb";


// Define async function to fetch product by ID
const getCategory = async (id: string): Promise<any> => {
    try {
        // Fetch product from database
        const res = await prismadb.category.findUniqueOrThrow({
            where: {
                id: id,
            },
            // Include related entities in the response
            include: {
               billboard: true,
            }
        });

        // Check if category was found
        if (!res) {
            // If product not found, throw an error
            throw new Error("Category not found");
        }

        // Return the fetched category
        return res;
    } catch (error) {
        // Log the actual error received from Prisma
        console.error("Error fetching category:", error);

        // Rethrow the error for higher-level error handling
        throw error;
    }
};

// Export the getProduct function
export default getCategory;
