import qs from "query-string"

import { Product } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?: string;
    colorId?: string;
    brandId?: string;
    sizeId?: string; 
    isFeatured?: boolean;
}

const getCategories = async (query: Query): Promise<Product[]> => {

    const url= qs.stringifyUrl({
        url: URL,
        query:{
            colorId: query.colorId,
            sizeId: query.sizeId,
            brandId: query.brandId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    })



    try {
        const res = await fetch(URL);
        const data = await res.json();
       
        return data; // Returning the fetched data
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of an error
    }
};

export default getCategories;