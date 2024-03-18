'use client'
import { storeCurrentPage } from "@/store/storeCurrentPage"
import { InfoTriggerComments } from "../comments/infoTriggerComments"
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
const LastComments = dynamic(() => import('@/components/organisms/comments/lastComments'), { ssr: false })

export const MenuRight = () => {
    const pathname = usePathname()
    const [infoCurrentPage] = storeCurrentPage((state) => [
        state.infoCurrentPage
    ]);
    const isInicial = pathname === "/inicio";
    const isList = pathname === "/series" || pathname === "/peliculas";

    return <section role="article" className={twMerge(`w-full -order-1 laptop:order-2 laptop:block laptop:w-[17vw] mt-[3rem] laptop:mt-0 relative laptop:sticky top-0 h-full`, isInicial ? "order-2" : "-order-1", isList ? "hidden" : "")}>
        <div className="hidden laptop:block w-full h-[15vh]">
        </div>
        <div className={twMerge("[--panel-direction-border:270deg]  w-full h-full laptop:h-[80vh] bg-panel rounded-bl-[3em] rounded-tl-[3em] borderPanel border-none")}>
            {
                infoCurrentPage && Object.keys(infoCurrentPage).length > 0 ?
                    (
                        <InfoTriggerComments data={infoCurrentPage} />
                    ) 
                    :
                    (
                        <LastComments />
                    )
            }
        </div>
    </section>
}