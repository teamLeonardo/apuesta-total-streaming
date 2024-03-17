import { DetailedHTMLProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const Block = ({ children, className, ...resto }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {

    return <div {...resto} className={twMerge('w-full h-full relative shadow-2xl bg-panel', className)} >
        {children}
    </div>
}