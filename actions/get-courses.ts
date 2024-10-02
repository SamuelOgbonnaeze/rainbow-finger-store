import prismadb from "@/lib/prismadb";
import { Course, CourseCategory } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressWithCourseCategory = Course & {
    courseCategory: CourseCategory | null;
    chapters: { id: string }[];
    progress: number | null;
}

type GetCourses = {
    userId: string;
    title?: string;
    courseCategoryId?: string;
}

export const getCourses = async ({
    userId, title, courseCategoryId
}: GetCourses): Promise<CourseWithProgressWithCourseCategory[]> => {
    try {
        const courses = await prismadb.course.findMany({
            where: {
                isPublished: true,
                title: {
                    contains: title,
                    mode: 'insensitive'
                },
                courseCategoryId,
            },
            include: {
                courseCategory: true,
                chapters: {
                    where: {
                        isPublished: true,
                    },
                    select: {
                        id: true,
                    }
                },
                purchases: {
                    where: {
                        userId,
                    }
                }
            },
            orderBy: {
                createdAt: "desc",
            }
        })


        const coursesWithProgress: CourseWithProgressWithCourseCategory[] = await Promise.all(
            courses.map(async course => {
                if (course.purchases.length === 0) {
                    return {
                        ...course,
                        progress: null
                    }
                }

                const progressPercentage = await getProgress(userId, course.id);

                return {
                    ...course,
                    progress: progressPercentage
                }
            })
        )


        return coursesWithProgress;
    } catch (error) {
        console.log("GET_COURSES", error);
        return [];
    }
}