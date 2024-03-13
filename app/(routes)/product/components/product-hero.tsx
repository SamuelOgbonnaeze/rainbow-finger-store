import { cn } from "@/lib/utils";



const ProductHero = () => {
    return (
        <div className="overflow-hidden">
            <div
                className=" relative aspect-square overflow-hidden bg-cover md:aspect-[2.4/1] bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/images/productdetailshero.png")' }}
            >
            </div>
        </div >

    );
}

export default ProductHero;