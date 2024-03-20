import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                `w-auto
                 rounded-full
             bg-[#E24F29]
                border-transparent 
                px-5
                py-3 
                disabled:cursor-not-allowed
                disabled:opacity-50
                font-semibold
                text-white
                hover:opacity-85 
                transition
                hover:text-[#E24F29]
                hover:bg-white
                `,
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
})

Button.displayName = "Button"

export default Button;