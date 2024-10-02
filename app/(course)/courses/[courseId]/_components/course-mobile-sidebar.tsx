import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import CourseSidebar from "./course-sidebar";

interface CourseMobileSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    };
    progressCount: number
}


const CourseMobileSidebar = ({course,progressCount}:CourseMobileSidebarProps) => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <div className="flex items-center border ml-3 p-2 rounded-full font-semibold text-muted-foreground hover:scale-105 ">
                See chapters
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white w-72">
                <CourseSidebar 
                course={course}
                progressCount={progressCount}
                />
            </SheetContent>
        </Sheet>
     );
}
 
export default CourseMobileSidebar;