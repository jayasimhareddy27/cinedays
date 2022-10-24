import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const tmdbApikey=process.env.REACT_APP_TMDB_KEY

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi=createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        //get movies by type
        getMovies:builder.query({
            query:({genreIdorcategoryName,page,searchQuery})=> {
                if(searchQuery){
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApikey}`
                } 
                if(genreIdorcategoryName && typeof genreIdorcategoryName ==='string'){
                    
                    return `movie/${genreIdorcategoryName}?page=${page}&api_key=${tmdbApikey}`
                }  
                if(genreIdorcategoryName && typeof genreIdorcategoryName ==='number'){
                    return `discover/movie?with_genres=${genreIdorcategoryName}&page=${page}&api_key=${tmdbApikey}`
                }  
            
                return `movie/popular?page=${page}?&api_key=${tmdbApikey}`
        }}), 
        //get movies genres
        getList:builder.query({
            query:({account_id,page,listName})=> `account/${account_id}/${listName}/movies?api_key=${tmdbApikey}&page=${page}&session_id=${localStorage.getItem("session_id")}`
        }), 
        getGenres:builder.query({
            query:()=> {
                return `genre/movie/list?api_key=${tmdbApikey}&language=en-US`}
        }), 
        //get movies id
        getMovie:builder.query({
            query:(id)=> `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApikey}`
        }), 
        getRecommendations:builder.query({
            query:({movie_id,list})=> `/movie/${movie_id}/${list}?&api_key=${tmdbApikey}`
        }), 
        getActorsDetails:builder.query({
            query:(id)=> `/person/${id}?api_key=${tmdbApikey}`
        }), 
        getMoviesByActorsId:builder.query({
            query:({id,page})=> `discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApikey}`
        }), 
    }),
});
export const {useGetMoviesQuery,useGetGenresQuery,useGetListQuery,useGetMovieQuery,useGetRecommendationsQuery,useGetActorsDetailsQuery,useGetMoviesByActorsIdQuery}=tmdbApi;

