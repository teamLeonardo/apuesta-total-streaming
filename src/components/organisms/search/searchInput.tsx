import { BiSearch } from "react-icons/bi"
import { IoMdArrowDropdown } from "react-icons/io"
import { RiApps2Fill } from "react-icons/ri"

export const SearchInput = () => {
    return <div className="w-full h-[100px] laptop:h-[9vw] sticky top-[0px] z-50 grid items-center 
    grid-cols-[1fr,auto] gap-5">
        <div className="bg-[#121A31] hidden w-auto h-[40%] rounded-full border-[1px] border-[var(--secondary-color-transparent)] gap-2 laptop:grid grid-cols-[25%,auto,1fr] px-[2rem]">
            <div className="grid grid-cols-[auto,auto,1fr] cursor-pointer gap-2 text-text1 items-center w-full hover:text-text2">
                <RiApps2Fill size={20} />
                <span className="font-bold text-md">
                    categorias
                </span>
                <IoMdArrowDropdown size={25} className="justify-self-end" />
            </div>
            <div className="w-[3px] h-full flex items-center">
                <div className="bg-[var(--secondary-color-transparent)] w-full h-4/6"></div>
            </div>
            <div className="w-full grid grid-cols-[auto,50px] group text-text1">
                <input type="text" placeholder="busca tus peliculas y series" className="w-full bg-transparent outline-none capitalize group-hover:text-text2" />
                <div className="w-full flex justify-center items-center text-current">
                    <BiSearch size={35} className="group-hover:text-text2" />
                </div>
            </div>
        </div>
        <div className="w-full h-[40%] flex laptop:hidden justify-end items-center">
            <div className="bg-panel size-[55px] rounded-2xl flex justify-center items-center cursor-pointer">
                <BiSearch size={25} />
            </div>
        </div>
        <div className="h-[40%] w-auto ">
            <div className="bg-secondaryColor p-3 rounded-2xl flex justify-center items-center cursor-pointer">
                <RiApps2Fill size={25} />
            </div>
        </div>
    </div>
}