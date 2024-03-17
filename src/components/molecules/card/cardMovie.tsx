'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MoviesAndSeries } from "@/shared/types/moviesType";


export function CardMovie({ movie }: { movie: MoviesAndSeries }) {
    const router = useRouter()
    if (!movie.poster_path) {
        return <></>
    }
    return <div
        onClick={() => {
            router.push('/movie/' + movie.id)
        }}
        className="relative flex-[1_0_21%] group hover:cursor-pointer flex justify-center items-center">
        <div className="relative w-auto grid grid-rows-[1fr,auto] gap-2 ">
            <figure className="bg-[#000] relative rounded-[5px] mb-0 ">
                <Image
                    className="[aspect-ratio:auto_178_/_267] group-hover:opacity-[0.5] object-cover object-top rounded-[5px]"
                    alt="s"
                    width={178}
                    height={267}
                    src={process.env.imageTmdb + movie.poster_path}
                />
                <div
                    className="w-[3.75rem] 
                h-[3.75rem] 
                leading-[3.75rem] 
                text-center 
                border-[2px] 
                border-solid 
                border-[#fff] 
                absolute 
                left-[0] 
                top-[0] 
                right-[0] 
                bottom-[0] 
                m-auto 
                z-[1] 
                rounded-[50%] 
                text-[1.25rem] 
                hidden 
                text-[#fff] 
                group-hover:z-[5] 
                group-hover:block"
                >
                    <p className="ml-[18px] mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1.5em" viewBox="0 0 384 512">
                            <path d="M73 39A47.9 47.9 0 0 0 0 80v352a48 48 0 0 0 73 41l288-176a48 48 0 0 0 0-82L73 39z" />
                        </svg>
                    </p>
                </div>
            </figure>
            <div className="w-full flex justify-center">
                <h2 className="text-white w-[178px] truncate text-center text-sm group-hover:text-primary">
                    {
                        movie?.title
                    }
                </h2>
            </div>
        </div>
        <div
            className="absolute 
                left-[60%]
                top-[50%]
                !transform -translate-y-1/2
                w-[200%]
                bg-[#080F28] 
                overflow-hidden 
                p-4 
                z-10 
                rounded-[5px] 
                hidden 
                mt-4 
                pointer-events-none 
                max-w-[345px] 
                text-[.875rem] 
                leading-5 
                group-hover:z-[11] 
                group-hover:block
                text-white
                "
        >
            <div
                className="
                    font-bold 
                    text-left 
                    text-[1rem] 
                    leading-normal
                    mb-0 
                    pt-[.5rem]
                    relative
                    z-[2]
                    "
            >
                {
                    movie?.title
                }
            </div>
            <div
                className="relative z-[2]"
            >
                <p className="m-0 text-[#8DA0BC]">
                    {
                        movie?.overview
                    }
                </p>
                <p className="m-0 text-[#8DA0BC] inline-flex gap-1 items-center">
                    <span className="text-white">
                        Género:
                    </span>
                    {
                        movie.genre_ids.map((num_id: any) => {
                            return <span key={num_id} className="link text-xs">
                                accion
                            </span>
                        })
                    }

                </p>
                <p className="m-0 text-[#8DA0BC]">
                    <span>Reparto:</span>
                </p>
            </div>
            <Image
                className="absolute left-[0] top-[0] z-[1] object-cover w-full h-full filter blur-[15px] opacity-[.5] transform scale-[1.3] rounded-[5px]"
                alt="s"
                width={178}
                height={267}
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
        </div>
    </div>

}