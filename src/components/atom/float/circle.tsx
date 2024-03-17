import { twMerge } from "tailwind-merge"


export const CircleFloat = (props: { color: string, size: string, position: string }) => {
    return <div
        className={twMerge(`gradientFloat -z-10 fixed blur-3xl`, props.color, props.size, props.position)}
    />
}