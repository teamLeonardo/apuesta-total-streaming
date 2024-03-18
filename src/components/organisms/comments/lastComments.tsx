
import { TilleHome } from "@/components/atom/title/titleHome"
import { IoMdMore } from "react-icons/io"

const getUser = async () => {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/users")
    return await respuesta.json()
}

export default async function LastComments() {
    const data: any[] = await getUser()
    return <div className="py-10 pl-4 relative gap-2 w-full h-full grid grid-rows-[auto,1fr]">
        <TilleHome type="h1">
            Ultimas Interacciones:
        </TilleHome>
        <div className="w-full h-full flex flex-col gap-3 overflow-auto">
            {
                data.map((user) => {
                    return <div className="w-full bg-fondo pt-1 h-[13vh] aspect-video rounded-2xl grid grid-rows-[1fr,auto]">
                        <div className="h-full w-[90%] mx-auto bg-panel rounded-2xl pt-2 p-1 grid grid-rows-[auto,1fr] place-items-center">
                            <div className="w-full grid grid-cols-[auto,auto,1fr] gap-2 place-items-center">
                                <div className="w-[10px] h-[10px] 
                                rounded-full 
                                bg-secondaryColor 
                                [filter:drop-shadow(_0_0_5rem_var(--secondary-color))]
                                "/>
                                <div className="w-[90px] text-text1 truncate text-[12px] font-bold"> KUNFU PANDA 3</div>
                                <div className="justify-self-end ">
                                    <IoMdMore size={20} />
                                </div>
                            </div>
                            <div className="w-[90%] truncate text-[12px]">
                                ME GUSTO MUCHO LA PELICULA, LA PARTE DE
                            </div>
                        </div>
                        <div className="w-[90%] py-2 mx-auto ">
                            <div className="w-fit grid grid-cols-[auto,1fr,auto] gap-2 place-items-center">
                                <img
                                    className="
                                 object-cover 
                                 object-top 
                                 rounded-full"
                                    alt={user.name}
                                    width={30}
                                    height={30}
                                    src={user.avatar}
                                />
                                <div className="w-[60px] truncate text-[12px] font-bold">
                                    BY {user.name}
                                </div>
                                <div className="text-[13px] text-text1">
                                    OCT 3TH
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
}