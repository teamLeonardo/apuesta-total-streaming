import Link from "next/link"

export const LinkButton = ({ to, children }: any) => {
    return <Link className="text-blue-200 underline cursor-pointer hover:text-blue-500" href={to}>
        {children}
    </Link>
}