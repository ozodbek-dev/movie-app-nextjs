export interface IMovie {
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
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
    name:string
    original_name:string
}
export interface TrendingResponse {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}

export interface Element {
    type:"Trailer"
}
export interface ProductInterface{
    id:string;
    name:string;
    default_price:{
        id:string
    }
}
