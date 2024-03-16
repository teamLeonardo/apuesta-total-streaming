import { Block } from "@/components/atom/block/block"
import { TilleHome } from "@/components/atom/title/titleHome"

export const CardHome = ({ _ }: any) => {

    return <Block className="h-[200px]">
        <TilleHome type={"h3"}>
            Peliculas estreno
        </TilleHome>
    </Block>
}