import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Course } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Course[];
    addItem: (data: Course) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCourseCart = create(
    persist<CartStore>((set, get) => (
        {
            items: [],
            addItem: (data: Course) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id)

                if (existingItem) {
                    return toast("Course already in cart.")
                }

                set({ items: [...get().items, data] })
                toast.success("Course is added to cart.")
            },
            removeItem: (id: string) => {
                set({ items: [...get().items.filter((item) => item.id !== id)] });
                toast.success("Course is removed from cart")
            },
            removeAll: () => set({ items: [] })
        }
    ),
        {
            name: "course-cart-storage",
            storage: createJSONStorage(() => localStorage)
        })
)

export default useCourseCart;