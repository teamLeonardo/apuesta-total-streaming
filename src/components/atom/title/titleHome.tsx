

type EType = 'h1' | 'h2' | 'h3';

export const TilleHome = ({ type, children }: { type: EType, children: any }) => {
    if (type === "h1") {
        return <h1 className="text-xl">{children}</h1>
    }
    if (type === "h3") {
        return <h3 className="text-sm font-bold">{children}</h3>
    }
    return <div>
        {children}
    </div>
}
