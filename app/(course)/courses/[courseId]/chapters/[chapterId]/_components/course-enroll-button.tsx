import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";

interface CourseEnrollButtonProps{
    courseId:string;
    price: number;
}


const CourseEnrollButton = ({courseId,price}:CourseEnrollButtonProps) => {
    return (  
        <Button className="w-full md:w-auto flex items-center gap-x-2 group">
            Enroll for {<Currency value={price} className="text-white group-hover:text-[#E24F29]" />}
        </Button>
    );
}
 
export default CourseEnrollButton;