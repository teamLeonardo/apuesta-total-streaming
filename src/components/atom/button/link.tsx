import Link from "next/link"

export const LinkButton = ({ id, to, children }: any) => {
    return <Link id={id ?? ""} className="text-blue-200 underline cursor-pointer hover:text-blue-500" href={to}>
        {children}
    </Link>
}