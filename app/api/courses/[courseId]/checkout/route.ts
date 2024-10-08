import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function POST(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const user = await currentUser();

        if(!user || !user.id || !user.emailAddresses?.[0]?.emailAddress){
            return new NextResponse("Unauthorized", {status:401})
        }

        const course= await prismadb.course.findUnique({
            where:{
                id: user.id,
                isPublished:true,
            }
        })

        const purchase= await prismadb.purchase.findUnique({
            where:{
                userId_courseId:{
                    userId:user.id,
                    courseId:params.courseId,
                }
            }
        })

        if(purchase){
            return new NextResponse("Course already purchased", {status:400})
        }
        if(!course){
            return new NextResponse("Course not found", {status:400})
        }
    } catch (error) {
        console.log("COURSE_ID_CHECKOUT", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}