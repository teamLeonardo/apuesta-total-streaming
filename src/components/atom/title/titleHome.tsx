

type EType = 'h1' | 'h2' | 'h3';

export const TilleHome = ({ type, children }: { type: EType, children: any }) => {
    if (type === "h1") {
        return <h1 className="relative text-3xl text-text2">{children}</h1>
    }
    if (type === "h2") {
        return  <h2 className="relative text-3xl text-text2 font-bold">{children}</h2>
    }
    if (type === "h3") {
        return <h3 className="relative text-sm text-text2 font-bold">{children}</h3>
    }
    return <div>
        {children}
    </div>
}
