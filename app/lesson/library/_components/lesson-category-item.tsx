"use client"

import qs from "query-string"
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";

interface LessonCategoryItemProps{
    label: string;
    value?: string;
    icon?: IconType
}

const LessonCategoryItem = ({label,value, icon:Icon}:LessonCategoryItemProps) => {
const pathname= usePathname();
const router= useRouter();
const searchParams = useSearchParams();

const currentCategoryId= searchParams.get("courseCategoryId");
const currentTitle= searchParams.get("title")

const isSelected= currentCategoryId === value;

const onClick= () =>{
    const url = qs.stringifyUrl({
        url:pathname,
        query:{
            title:currentTitle,
            courseCategoryId: isSelected? null:value,
        }
    }, {skipNull:true, skipEmptyString:true})

    router.push(url)
}

    return ( 
        <button 
        onClick={onClick}
        type="button" className={cn(
            "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-[#E24F29] transition",
            isSelected && "border-[#E24F29] bg-sky-200/20 text-[#E24F29] "
            )}>
            {Icon && <Icon size={20} />}
            <div className="truncate">
                {label}
            </div>
        </button>
     );
}
 
export default LessonCategoryItem;