import { twMerge } from "tailwind-merge"

export const ButtonUI = ({ children, className, ...resto }: any) => {
    return <button {...resto} className={twMerge("bg-secondaryColor py-3 px-6 rounded-lg", className)}>
        {children}
    </button>
}