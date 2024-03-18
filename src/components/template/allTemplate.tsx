import { MenuTemplate } from "@/components/organisms/menu/menuTemplate";
import { SearchInput } from "@/components/organisms/search/searchInput";
import { CirclesFloat } from "@/components/molecules/float/circlesFloat";
import { MenuRight } from "@/components/organisms/menu/menuRight";
import { Block } from "@/components/atom/block/block";
import { IoIosHome, IoMdPlay, IoMdTv } from "react-icons/io";
import Link from "next/link";

export default function AllTemplate({ children }: any) {
    return <div className="grid 
    grid-cols-none 
    grid-rows-[auto,auto] 
    laptop:grid-cols-[auto,1fr,auto]  
    laptop:grid-rows-none
    gap-8 
    w-full 
    h-full
    laptop:h-screen 
    overflow-auto
    ">
        <CirclesFloat />
        <MenuTemplate />
        <main className="h-full laptop:h-screen w-full relative">
            <div className="h-auto relative ">
                <SearchInput />
                {children}
            </div>
        </main>
        <MenuRight />
        <div className="laptop:hidden fixed w-full h-[11vh] bottom-0 left-0 z-50 flex justify-center items-start">
            <Block className="h-[70px] w-[95%] rounded-3xl gap-7 flex justify-center items-center ">
                <Link href={'/peliculas'} className="flex group flex-col justify-center items-center">
                    <IoMdPlay size={26} className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    />
                    <span className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    >
                        Peliculas
                    </span>
                </Link>
                <Link href={'/'} className="flex group flex-col justify-center items-center">
                    <IoIosHome size={26} className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    />
                    <span className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    >
                        Inicio
                    </span>
                </Link>
                <Link href={'/series'}  className="flex group flex-col justify-center items-center">
                    <IoMdTv size={26} className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    />
                    <span className="text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor"
                    >
                        Series
                    </span>
                </Link>
            </Block>
        </div>
    </div>
}