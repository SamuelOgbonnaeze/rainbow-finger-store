import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import Currency from "./ui/currency";

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    progress: number | null
    courseCategory: string;
}


const CourseCard = ({
    id, title, imageUrl, chaptersLength, price, progress, courseCategory
}: CourseCardProps) => {
    return (
        <Link href={`/courses/{id}`}>
            <div className="group hover:shadow-sm hover:scale-105 transition overflow-hidden border rounded-lg p-3 h-full">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        alt={title}
                        src={imageUrl}
                    />
                </div>
                <div className="text-lg md:text-base font-medium group-hover:text-[#DF3B11] transition line-clamp-2  ">
                    {title}
                </div>
                <p className="text-xs text-muted-foreground">
                    {courseCategory}
                </p>
                <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                    <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={BookOpen} />
                        <span>{chaptersLength} {chaptersLength === 1 ? "chapter" : "chapters"}</span>
                    </div>
                </div>
                {progress !== null ? (
                    <div>
                        todo: progress components
                    </div>
                ) : (
                    <Currency value={price} />
                )}
            </div>
        </Link>
    )
}

export default CourseCard;