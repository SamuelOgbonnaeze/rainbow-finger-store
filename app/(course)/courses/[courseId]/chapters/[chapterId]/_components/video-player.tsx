"use client"

import { Loader2, Lock } from "lucide-react";
import { useState } from "react";
import MuxPlayer from '@mux/mux-player-react';
import { cn } from "@/lib/utils";


interface VideoPlayerProps {
    playbackId: string;
    courseId: string;
    chapterId: string;
    nextChapterId?: string;
    isLocked: boolean;
    completeOnEnd: boolean;
    title: string;

}

const VideoPlayer = ({ playbackId, courseId, chapterId, nextChapterId, isLocked, completeOnEnd, title }: VideoPlayerProps) => {

    const [isReady, setIsReady] = useState(false)

    return (
        <div className="relative aspect-video">
            {/* if it is locked */}
            {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800  flex-col gap-y-2 text-secondary">
                    <Lock className="w-8 h-8  text-secondary" />
                    <p className="text-sm">This chapter is locked</p>
                </div>
            )}
            {/* if it is not locked but not ready */}
            {!isReady && !isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800 ">
                    <Loader2 className="w-8 h-8 animate-spin text-secondary" />
                </div>
            )}
            {/* wen not locked, action to make it ready */}
            {!isLocked && (
                <MuxPlayer
                    title={title}
                    className={cn(
                        !isReady && "hidden"
                    )}
                    onCanPlay={() => setIsReady(true)}
                    onEnded={() => { }}
                    autoPlay
                    playbackId={playbackId}
                />
            )}
        </div>
    );
}

export default VideoPlayer;