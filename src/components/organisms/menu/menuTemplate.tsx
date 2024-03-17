import { IoIosArrowBack, IoIosHome, IoMdPlay, IoMdTv } from "react-icons/io";

const dataMenuList = () => {
    return [
        {
            title: "home",
            redirect: "/",
            Icons: () => (<IoIosHome size={26} className="text-text1 
group-active:scale-95 
group-active:text-text2 
group-hover:text-secondaryColor"
            />)
        },
        {
            title: "Peliculas",
            redirect: "/movies",
            Icons: () => (<IoMdPlay size={26} className="text-text1 
group-active:scale-95 
group-active:text-text2 
group-hover:text-secondaryColor"
            />)
        },
        {
            title: "TV show",
            redirect: "/show",
            Icons: () => (<IoMdTv size={26} className="text-text1 
group-active:scale-95 
group-active:text-text2 
group-hover:text-secondaryColor"
            />)
        }
    ]
}

export const MenuTemplate = () => {
    const data = dataMenuList()
    return <section className="w-[20vw] h-auto ">
        <div className="w-full h-[12vh] grid grid-rows-3 ">
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
                {
                    data.map((value, idx) => {
                        return <div key={idx} className="w-full cursor-pointer h-[70px] flex justify-start items-center
                        relative  group transition-all 
                       hover:border-l-4 
                       hover:border-secondaryColor
                       hover:bg-gradient-to-r
                       hover:to-transparent
                       hover:to-60%
                       hover:from-[var(--secondary-color-transparent)]
                       hover:from-13%
                       box-content
                       "
                        >
                            <div className="w-[50%] ml-8 grid grid-cols-[auto,1fr]  
                         gap-2 place-items-center ">
                                <value.Icons />
                                <span
                                    className="capitalize font-medium text-[13pt] text-text1 
                                   group-active:scale-95 
                                   group-active:text-text2 
                                   group-hover:text-secondaryColor
                                   group-hover:font-bold
                                   "
                                >
                                    {value.title}
                                </span>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    </section>
} 