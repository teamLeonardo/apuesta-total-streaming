import { TilleHome } from "@/components/atom/title/titleHome";
import { CardHome } from "@/components/molecules/card/cardHome";
import { Carousel } from "@/components/organisms/carousel/CarouselHome";
import { MenuTemplate } from "@/components/organisms/menu/menuTemplate";
import { MoviesHome } from "@/components/organisms/topList/moviesHome";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-8 w-full h-screen overflow-hidden">
      <MenuTemplate />
      <main className="min-h-screen w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[calc(100%-14px)] h-[30vh] 
            pointer-events-none 
            bg-gradient-to-t
            from-transparent 
            z-10
            from-[10%] 
            to-[#000000d9] 
            to-[90%]
            " />

        <div className="w-full h-full relative overflow-y-auto">
          <Carousel />
          <div className="relative ">
            <TilleHome type={"h1"}>
              Peliculas estreno
            </TilleHome>
            <MoviesHome />
          </div>
          <div className="relative ">
            <TilleHome type={"h1"}>
              Peliculas estreno
            </TilleHome>
            <div className="grid gap-3 grid-cols-5">
              <CardHome />
              <CardHome />
              <CardHome />
              <CardHome />
              <CardHome />
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none bottom-0 left-0 w-[calc(100%-14px)] h-[30vh] 
            bg-gradient-to-b
            from-transparent 
            z-10
            from-[10%] 
            to-[#000000d9] 
            to-[90%]
            " />
      </main>
    </div>

  );
}
