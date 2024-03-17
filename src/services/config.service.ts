import axios from "axios"

const point = axios.create({
    baseURL: process.env.baseURL,
    params: {
        api_key: process.env.apiKey,
        language: "es",
    }
});

point.interceptors.request.use((conf) => {
    const { url } = conf
    if (url && url.includes("discover")) {
        conf.params = {
            ...conf.params,
            // "primary_release_date.gte": "2022-01-01",
            // "primary_release_date.lte": "2022-02-01",
            "sort_by": "popularity.desc",
        }
    }
    return conf
});

export {
    point
}

export const getAllMovies = async (payload: any) => {
    const { pageParam: page = 1, ...resto } = payload
    return (await point.get("/discover/movie", { params: { page, ...resto } || {} })).data.results
}
