import { OriginCountry } from "./generalType"

export type MoviesAndSeries = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: Date
    video: boolean
    name: string
    original_name: string
    first_air_date: Date
    vote_average: number
    vote_count: number
    origin_country: OriginCountry[]
}