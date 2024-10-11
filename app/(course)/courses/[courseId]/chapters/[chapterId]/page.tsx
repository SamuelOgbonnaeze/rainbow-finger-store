import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VideoPlayer from "./_components/video-player";
import CourseEnrollButton from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import useCourseCart from "@/hooks/use-course-cart";
import prismadb from "@/lib/prismadb";


const ChapterIdPage = async (
    { params }: { params: { courseId: string; chapterId: string } }
) => {

    const { userId } = auth()


    if (!userId) {
        return redirect("/lesson")
    }

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId,
        courseId: params.courseId,
        chapterId: params.chapterId,
    })

    if (!chapter || !course) {
        return redirect("/lesson")
    }
    const currentCourse = await prismadb.course.findUnique({
        where: {
            id: params.courseId,
        }
    })

    if (!currentCourse) {
        console.error("Course not found");
        return redirect("/lesson")
    }

    const data = {
        id: currentCourse.id,
        title: currentCourse.title,
        imageUrl: currentCourse.imageUrl!,
        price: currentCourse.price!,
        isPublished: currentCourse.isPublished,
    }

    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isComplete


    return (
        <div>
            {userProgress?.isComplete && (
                <Banner
                    variant="success"
                    label="You already completed this chapter"
                />
            )}
            {isLocked && (
                <Banner
                    variant="warning"
                    label="You need to buy this course to watch this chapter"
                />
            )}
            <div className="flex flex-col max-w-4xl mx-auto pb-20">
                <div className="p-4">
                    <VideoPlayer
                        chapterId={params.chapterId}
                        title={chapter.title}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        playbackId={muxData?.playbackId!}
                        isLocked={isLocked}
                        completeOnEnd={completeOnEnd}
                    />
                </div>
                <div>
                    <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
                        {purchase ? (
                            // add course proress button 
                            <div>mijf</div>
                        ) : (
                            <CourseEnrollButton
                                data={data}
                                courseId={params.courseId}
                                price={course.price!}
                            />
                        )}
                    </div>
                    <Separator />
                    <div>
                        <Preview value={chapter.description!} />
                    </div>
                    {!!attachments.length && (
                        <>
                            <Separator />
                            <div className="p-4">
                                {attachments.map((attachment) => (
                                    <a
                                        href={attachment.url}
                                        target="_blank"
                                        key={attachment.id}
                                        className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover"
                                    >
                                        <File />
                                        <p className="line-clamp-1">
                                            {attachment.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChapterIdPage;