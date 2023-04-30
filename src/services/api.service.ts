import * as process from "process";
const base_url:string = process.env.TMDB_API_URL as string;
const api_key:string = process.env.TMDB_API_KEY as string;
console.log(base_url)
export const API_REQUEST = {
    trending:`${base_url}/trending/all/week?api_key=${api_key}&language-en-US`,
    top_rated:`${base_url}/movie/top_rated?api_key=${api_key}&language-en-US`,
    tv_top_rated:`${base_url}/tv/top_rated?api_key=${api_key}&language-en-US`,
    movie_popular:`${base_url}/movie/popular?api_key=${api_key}&language-en-US`,
    documentary:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genre=99`,
    comedy:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genre=35`,
    family:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genre=10751`,
    history:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genre=36`,
}