export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    brand: Brand;
    color: Color;
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Brand {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Course {
    id: string;
    title: string;
    imageUrl: string|null;
    price: number | null;
    isPublished: boolean;
}

export interface CourseCategory {
    id: string;
    name: string;
    courses: Course[];
}

export interface Attachment {
    id: string;
    name: string;
    url: string;
    course: Course;
}

export interface Chapter {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    position: number;
    isPublished: boolean;
    isFree: boolean;
    course: Course;
    muxData?: MuxData;
    userProgress: UserProgress[];
}

export interface MuxData {
    id: string;
    assetId: string;
    playbackId?: string;
    chapter: Chapter;
}

export interface UserProgress {
    id: string;
    userId: string;
    isComplete: boolean;
}

export interface Purchase {
    id: string;
    course: Course;
}
