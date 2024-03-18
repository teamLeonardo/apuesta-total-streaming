
import { TilleHome } from "@/components/atom/title/titleHome"
import Image from "next/image"

const getUser = async () => {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/users")
    return await respuesta.json()
}

export const LastComments = async () => {
    const data: any[] = await getUser()
    return <div className="py-10 px-4 relative gap-2 w-full h-full grid grid-rows-[auto,1fr]">
        <TilleHome type="h1">
            Ultimas Interacciones:
        </TilleHome>
        <div className="w-full h-full flex flex-col gap-3 ">
            {
                data.map((user) => {
                    return <div className="w-full bg-fondo pt-1 h-[13vh] aspect-video rounded-2xl grid grid-rows-[1fr,auto]">
                        <div className="h-full w-[90%] mx-auto bg-panel rounded-2xl">

                        </div>
                        <div className="w-[90%] py-2 mx-auto ">
                            <div className="w-fit grid grid-cols-[auto,1fr,auto] gap-2 place-items-center">
                                <Image
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
                                <div className="text-[13px]">
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