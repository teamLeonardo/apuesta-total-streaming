import { MenuTemplate } from "@/components/organisms/menu/menuTemplate";
import { SearchInput } from "@/components/organisms/search/searchInput";
import { LastComments } from "@/components/organisms/comments/lastComments";
import { CirclesFloat } from "@/components/molecules/float/circlesFloat";

export default function AllTemplate({ children }: any) {
    return <div className="grid grid-cols-[auto,1fr,auto] gap-8 w-full h-screen overflow-auto">
        <CirclesFloat />
        <MenuTemplate />
        <main className="h-screen w-full relative">
            <div className="h-auto relative">
                <SearchInput />
                {children}
            </div>
        </main>
        <LastComments />

    </div>
}