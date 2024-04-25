
import getCategories from "@/app/api/get-categories";

import Discover from "@/components/discover";

export const revalidate = 0

const DiscoverPlug = async () => {
    const categories = await getCategories();

    return (
        <div>
            <Discover data={categories} />
        </div>
     );
}
 
export default DiscoverPlug;