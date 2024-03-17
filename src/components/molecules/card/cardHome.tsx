
import '@/shared/style/scrollAnimate.css'
import { Block } from '@/components/atom/block/block'
import { BiPlay } from 'react-icons/bi'
import { formatDate } from '@/shared/utils/formatDate'

export const CardHome = ({
    result,
    animate,
}: {
    result: any
    animate?: boolean
}) => {
    const title = result.title ?? result.name
    const time = result.release_date ?? result.first_air_date

    return (
        <Block
            className={`relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBottonCard before:absolute group before:z-10 h-full cursor-pointer`}
        >
            <img
                src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                alt={`Poster ${title}`}
                width={500}
                height={282}
                className='w-full saturate-[1.1] rounded-lg h-full'
            />
            <div
                className={`absolute ${animate ? 'scroll-parallax' : ''
                    } bottom-0 pl-4 pb-1 z-10 group-hover:text-white transition-colors duration-300 hover:duration-300 hover:transition`}
            >
                <h3 className='font-bold text-sm line-clamp-1 uppercase leading-4'>
                    {title}
                </h3>
                <span className='text-xs font-normal text-text2 uppercase'>{formatDate(time)}</span>
            </div>
            <span className='absolute w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] 
           inline-block opacity-0 group-hover:opacity-100 hover:transition group-hover:-translate-y-[50%] hover:duration-300 transition duration-300 z-30'>
                <BiPlay size={60}/>
            </span>
        </Block>
    )
}
