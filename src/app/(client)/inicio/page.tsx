import dynamic from "next/dynamic";
const TopListHome = dynamic(
  () => import('@/components/organisms/topList/TopListHome')
)
export default function Home() {
  return (

    <div className="w-full h-full relative overflow-y-auto">
      {/* <Carousel /> */}
      <div className="mt-[40px] gap-5 grid h-auto mb-28">
        <TopListHome path="movie/now_playing" title="Tops Peliculas"/>
        <TopListHome path="trending/tv/week" title="Series Mas vistas"/>
      </div>

    </div>

  );
}
