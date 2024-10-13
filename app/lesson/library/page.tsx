import prismadb from "@/lib/prismadb";
import LessonCategories from "./_components/categories";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";
import CoursesList from "@/components/courses-list";

import { redirect } from "next/navigation";
import SignInToast from "@/components/signin-toast";
import toast from "react-hot-toast";

interface LessonLibraryProps {
    searchParams: {
        title: string;
        courseCategory: string;
    }
}

const LessonLibrary = async ({ searchParams }: LessonLibraryProps) => {
    const { userId } = auth()

    if (!userId) {
        return (
            <>
                <SignInToast message="Please sign in to access the lesson library." />
            </>
        );
    }

    const courseCategories = await prismadb.courseCategory.findMany({
        orderBy: {
            name: 'asc',
        }
    })

    const courses = await getCourses({
        userId,
        ...searchParams,
    })

    return (
        <>
            <div className=" w-full mx-auto opacity-500">
                <div className="bg-[url('/images/storehero.png')] bg-cover bg-no-repeat bg-center text-center items-center w-full h-[600px] ">
                </div>
            </div>

            <div className="p-4 bg-white -mt-[40px] rounded-full ">
                <LessonCategories
                    items={courseCategories}
                />
            </div>
            <div className="px-6 pt-3  lg:mb-0 block">
                <SearchInput />
            </div>
            <div className="p-4 bg-white space-y-4 ">
                <CoursesList items={courses} />
            </div>


        </>
    );
}

export default LessonLibrary;