"use client"

import Button from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti";
import { cn } from "@/lib/utils";

import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseProgressButtonProps {
    chapterId: string;
    courseId: string;
    isCompleted?: boolean;
    nextChapterId?: string;
    userId: string;
}

export const CourseProgressButton = (
    { chapterId, courseId, isCompleted, nextChapterId, userId }: CourseProgressButtonProps
) => {

    const router = useRouter()
    const confetti = useConfettiStore()
    const [isLoading, setIsLoading] = useState(false)

    const onClick = async () => {
        try {
            setIsLoading(true);
            
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/courses/${courseId}/chapters/${chapterId}/progress`, {
                isComplete: !isCompleted,
                userId,
            })

            if (!isCompleted && !nextChapterId) {
                confetti.onOpen();
            }

            if (!isCompleted && nextChapterId) {
                router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
            }

            toast.success("Progress updated");
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    const Icon = isCompleted ? XCircle : CheckCircle;

    return (
        <Button className={cn(
            "flex items-center w-full md:w-auto ",
            !isCompleted ? "bg-emerald-600 text-white hover:text-gray-200 hover:bg-emerald-600/80" : "border border-input bg-background shadow-sm hover:bg-accent text-black hover:text-accent-foreground"
        )}
            onClick={onClick}
            disabled={isLoading}
            type="button" >
            {isCompleted ? "Not completed" : "Mark as complete"}
            <Icon className="h-4 w-4 ml-2" />
        </Button>
    )
}  