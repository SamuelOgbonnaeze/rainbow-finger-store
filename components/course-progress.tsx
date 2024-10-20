import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
    value: number;
    variant?: "default" | "success";
    size?: "default" | "sm"
}

const colorByVariant = {
    default: "text-sky-700",
    success: "text-emerald-700"
}

const sizeByVariant = {
    default: "text-sm",
    success: "text-xs"
}


const CourseProgress = ({ value, variant, size }: CourseProgressProps) => {
    return (
        <div>
            <Progress
                value={value}
                className="h-2"
                variant={variant}
            />
            <p className={cn(
                "font-medium mt-2 text-sky-700",
                colorByVariant[variant || "default"],
                sizeByVariant[variant || "default"]
            )}>
                {Math.round(value)}% Complete
            </p>
        </div>
    );
}

export default CourseProgress;