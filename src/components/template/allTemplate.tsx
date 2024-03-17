import { MenuTemplate } from "@/components/organisms/menu/menuTemplate";
import { CircleFloat } from "../atom/float/circle";

export default function AllTemplate({ children }: any) {
    return <div className="grid grid-cols-[auto,1fr,auto] gap-8 w-full h-screen overflow-hidden">
        <CircleFloat
            color="[--circle-color:var(--secondary-color)]"
            size="[--circle-size:1200px]"
            position="top-[calc(150px+var(--circle-size)/2*-1)]
             left-[calc(50vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:var(--secondary-color)]"
            size="[--circle-size:1200px]"
            position="top-[calc(0px+var(--circle-size)/2*-1)]
             left-[calc(60vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:var(--secondary-color)]"
            size="[--circle-size:1200px]"
            position="top-[calc(0px+var(--circle-size)/2*-1)]
             left-[calc(15vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:_211,_78,_109]"
            size="[--circle-size:1000px]"
            position="top-[calc(150px+var(--circle-size)/2*-1)]
             left-[calc(50vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:_211,_78,_109]"
            size="[--circle-size:1000px]"
            position="top-[calc(200px+var(--circle-size)/2*-1)]
             left-[calc(40vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:_211,_78,_109]"
            size="[--circle-size:1000px]"
            position="top-[calc(250px+var(--circle-size)/2*-1)]
             left-[calc(30vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:_211,_78,_109]"
            size="[--circle-size:1000px]"
            position="top-[calc(300px+var(--circle-size)/2*-1)]
             left-[calc(20vw-calc(var(--circle-size)/2))]"
        />
        <CircleFloat
            color="[--circle-color:_211,_78,_109]"
            size="[--circle-size:2000px]"
            position="bottom-[calc(var(--circle-size)/2*-1)]
             left-[calc(100vw-calc(var(--circle-size)/2))]"
        />
        <MenuTemplate />
        <main className="h-screen w-full relative overflow-hidden">
            {children}
        </main>
        <section role="article" className="w-[250px]">
            acticle
        </section>

    </div>
}