import { IoIosArrowBack, IoIosHome } from "react-icons/io";

const dataMenuList = () => {
    return <div></div>
}

export const MenuTemplate = () => {
    return <section className="w-[20vw] h-auto ">
        <div className="w-full h-[12vh] grid grid-rows- ">
            <div className="w-full bg-panel h-full" />
            <div className="w-full h-full grid grid-cols-[1fr,auto]">
                <div className="w-full bg-panel flex justify-center items-center font-bold">
                    logo PEliculas
                </div>
                <div className="w-[50px] h-auto flex justify-center items-center">
                    <IoIosArrowBack size={30} className="text-[#8992AB]" />
                </div>
            </div>
            <div className="w-full bg-panel h-full" />
        </div>
        <div className="w-full h-[83vh] bg-panel rounded-br-[3em] borderPanel border-none ">
            <div className="w-full grid">
                <div className="w-full cursor-pointer h-[60px] flex justify-center items-center
                 relative  group transition-all 
                hover:border-l-2 
                hover:border-secondaryColor
                hover:bg-gradient-to-r
                hover:to-transparent
                hover:to-20%
                hover:from-[var(--secondary-color-transparent)]
                hover:from-13%
                box-content
                "
                >
                    <div className="w-[50%] grid grid-cols-[auto,1fr]  
                  gap-2 place-items-center ">
                        <IoIosHome size={26} className="text-text1 
                        group-active:scale-95 
                        group-active:text-text2 
                        group-hover:text-secondaryColor"
                        />
                        <span
                            className="capitalize font-medium text-[13pt] text-text1 
                            group-active:scale-95 
                            group-active:text-text2 
                            group-hover:text-secondaryColor
                            group-hover:font-bold
                            "
                        >
                            Inicio
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </section>
} 