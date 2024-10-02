"use client"

import { CourseCategory } from "@prisma/client";
import { IconType } from "react-icons";
import { FcMusic, FcOldTimeCamera, FcVideoFile, FcSportsMode, FcSalesPerformance, FcMultipleDevices, FcFilmReel } from "react-icons/fc";
import LessonCategoryItem from "./lesson-category-item";

interface LessonCategoriesProps {
    items: CourseCategory[]
}

const iconMap: Record<CourseCategory["name"], IconType> = {
    "Photography": FcOldTimeCamera,
    "Video Editing": FcVideoFile,
    "Fitness": FcSportsMode,
    "Accounting": FcSalesPerformance,
    "Music": FcMusic,
    "Filming": FcFilmReel,
    "Computer Science": FcMultipleDevices,
}

const LessonCategories = ({ items }: LessonCategoriesProps) => {
    return (

        <div className="flex items-center gap-x-2 overflow-x-auto pb-2 hide-scrollbar">
        {items.map((item) =>(
            <LessonCategoryItem
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
            />
        ))}
        </div>
    );
}

export default LessonCategories;