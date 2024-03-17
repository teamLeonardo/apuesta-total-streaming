import { Block } from "@/components/atom/block/block"
import { LinkButton } from "@/components/atom/button/link"
import { TilleHome } from "@/components/atom/title/titleHome"
import { CardHome } from "@/components/molecules/card/cardHome"

export const MoviesHome = () => {
    return <Block className="relative 
    w-[900px]
    h-auto p-5 bg-transparent border-[1px] border-[var(--secondary-color-transparent)]
    rounded-[30px]  
    overflow-hidden"
    >
        <div className="absolute w-full h-full blur-xl backdrop-blur-xl bg-[rgba(var(--secondary-color),.05)] top-0 left-0" />
        <div className="relative w-full mb-[20px] flex justify-between ">
            <TilleHome type={"h1"}>
                Peliculas estreno
            </TilleHome>
            <LinkButton to="/peliculas">
                ver mas
            </LinkButton>
        </div>

        <div
            className='flex gap-2 overflow-x-scroll carrusel snap-x snap-mandatory scroll-smooth'
        >
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
            <CardHome result={{ backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg", title: "panda", release_date: Date.now() }} />
        </div>
    </Block>

} 