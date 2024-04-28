import { Suspense, lazy } from 'react';

import { Product } from "@/types";
import { SkeletonCard } from './skeleton-card';

const ProductCard = lazy(() => import('@/components/ui/product-card'));

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
    title, items
}) => {




    // Function to shuffle the array
    const shuffleArray = (array: Product[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Select 4 random items from the shuffled array
    const randomItems = shuffleArray(items).slice(0, 4);

    return (
        <div className="space-y-4 px-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {randomItems.map((item) => (
                    <div key={item.id}>
                        <Suspense fallback={<SkeletonCard />}>
                            <ProductCard key={item.id} data={item} />
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;