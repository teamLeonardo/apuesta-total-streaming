'use client'
import { storeCurrentPage } from "@/store/storeCurrentPage"
import { InfoTriggerComments } from "../comments/infoTriggerComments"
import { LastComments } from "../comments/lastComments";

export const MenuRight = () => {

    const [infoCurrentPage] = storeCurrentPage((state) => [
        state.infoCurrentPage
    ]);

    return <section role="article" className="w-[17vw] sticky top-0 h-full">
        <div className="w-full h-[15vh]">
        </div>
        <div className="[--panel-direction-border:270deg] w-full h-[80vh] bg-panel rounded-bl-[3em] rounded-tl-[3em] borderPanel border-none">
            {
                infoCurrentPage && Object.keys(infoCurrentPage).length > 0 ? (
                    <InfoTriggerComments data={infoCurrentPage} />
                ) : 
                (
                    <LastComments />
                )
            }
        </div>
    </section>
}