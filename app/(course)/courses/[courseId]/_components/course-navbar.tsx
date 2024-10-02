import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseNavbarProps{
    course: Course & {
        chapters: (Chapter &{
            userProgress: UserProgress[] |null 
        })[]
    };
    progressCount: number
}

const CourseNavbar = ({course, progressCount}: CourseNavbarProps) => {
    return ( 
        <div className="p-4 border-b h-full flex items-center">
            CourseNavbar
        </div>
     );
}
 
export default CourseNavbar;