import prismadb from "@/lib/prismadb";
import { Chapter, Course, CourseCategory } from "@prisma/client"
import { NextResponse } from "next/server";
import { getProgress } from "./get-progress";

type CourseWithProgressWithCourseCategory = Course & {
    courseCategory: CourseCategory;
    chapters: Chapter[];
    progress: number | null;
}

type DashboardCourses = {
    completedCourses: CourseWithProgressWithCourseCategory[];
    coursesInProgress: CourseWithProgressWithCourseCategory[];
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
    try {
        const purchasedCourses = await prismadb.purchase.findMany({
            where: {
                userId: userId,
            },
            select: {
                course: {
                    include: {
                        courseCategory: true,
                        chapters: {
                            where: {
                                isPublished: true,
                            }
                        }
                    }
                }
            }
        })

        const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCourseCategory[];

        for (let course of courses) {
            const progress = await getProgress(userId, course.id);
            course["progress"] = progress;
        }

        const completedCourses = courses.filter((course) => course.progress === 100)
        const coursesInProgress = courses.filter((course) => (course.progress ?? 0)<100)

        return{
            completedCourses,
            coursesInProgress
        }
    } catch (error) {
        console.log("[GET_DASHBOARD_COURSES]", error);
        return {
            completedCourses: [],
            coursesInProgress: [],
        }
    }
}