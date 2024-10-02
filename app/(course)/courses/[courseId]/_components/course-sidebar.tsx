import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";
import CourseSidebarItem from "./course-sidebar-item";

interface CourseSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    };
    progressCount: number
}

const CourseSidebar = async ({ course, progressCount }: CourseSidebarProps) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/lesson")
    }

    const purchase = await prismadb.purchase.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId: course.id,
            }
        }
    })


    return (
           
            <div className="h-full flex border-r flex-col overflow-y-auto shadow-sm">
                <div className="p-8 flex flex-col border-b ">
                    <h1 className="font-semibold" >{course.title}</h1>
                    {/* check purchase and add progress */}
                </div>
                <div className="flex flex-col w-full">
                    {course.chapters.map((chapter) => (
                        <CourseSidebarItem
                            key={chapter.id}
                            id={chapter.id}
                            label={chapter.title}
                            isCompleted={!!chapter.userProgress?.[0]?.isComplete}
                            courseId={course.id}
                            isLocked={!chapter.isFree && !purchase}
                        />
                    ))}
                </div>
            </div>
        
    );
}

export default CourseSidebar;

//  <Dialog open={open} as="div" className="relative z-40 lg:hidden " onClose={onClose}>
//     {/* Background */}
//     <div className="fixed inset-0 bg-black bg-opacity-25 " />

//     {/* Dialog Position */}
//     <div className="fixed inset-0 z-40 flex">
//         <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[100px] flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

//             {/* Close Button */}
//             <div className="flex items-center justify-end px-4 text-[#DF3B11]">
//                 <IconButton className="border-[#DF3B11]" icon={<X size={15} onClick={onClose} />} />
//             </div>

//             {/* Mobile Navbar sections */}
//             <div className=' flex top-[0px] h-screen overflow-y-auto text-[#DF3B11] ' >
//                 <ul className='flex flex-col w-full gap-y-6 items-center mt-40 text-center font-inter font-normal text-[18px] leading-[32px] p-2'>
//                     <li className=' p-2'><Link href='/'> Home </Link></li>
//                     <li className=' p-2'><Link href='/product'> Store </Link></li>
//                     <li className=' p-2'><Link href='/lesson'> Lessons </Link></li>
//                     <li>
//                         <div className='mx-auto flex items-center gap-x-4'>
//                             <NavbarActions />
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </Dialog.Panel>
//     </div>
// </Dialog>