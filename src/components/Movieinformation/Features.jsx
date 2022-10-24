import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetListQuery} from '../../services/TMDB';


const Features=({data,setDrawer})=> {
    const {id:account_id}=useSelector((state)=>state.User);
    const {id}=useParams();
    const {data:favoriteMovies}=useGetListQuery({listName:'favorite',account_id,page:1});
    const {data:watchlistMovies}=useGetListQuery({listName:'watchlist',account_id,page:1});
    const [IsFavorited,setIsFavorited]=useState(false);
    const [IsWatchlisted,setIsWatchlisted]=useState(false);

    const AddToFavorite=async()=>{
        try {  
          await axios.post(`https://api.themoviedb.org/3/account/${account_id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem("session_id")}`,{  "media_type": "movie",  "media_id": id,  "favorite": !IsFavorited,})
        } catch (error) {
          console.log(error.message);
        }
        setIsFavorited((prev)=>!prev)
    }
    const AddToWatchlist=async()=>{
        try {
          await axios.post(`https://api.themoviedb.org/3/account/${account_id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem("session_id")}`,{  "media_type": "movie",  "media_id": id,  "watchlist": !IsWatchlisted,})
        } catch (error) {
          console.log(error.message);
        }
        setIsWatchlisted((prev)=>!prev)
    }
    useEffect(() => {
        setIsFavorited(
          !!favoriteMovies?.results?.find((movie) => movie?.id === data?.id),
          );
    }, [favoriteMovies, data]);
    
    useEffect(() => {
        setIsWatchlisted(
          !!watchlistMovies?.results?.find((movie) => movie?.id === data?.id),
        );
    }, [watchlistMovies, data]);
    
    return (
        <div  className='grid md:grid-cols-2 gap-12 p-11'>
            <div  className='grid grid-cols-3 '>
              {data?.homepage&&<button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid'><a href={data?.homepage} target={'_blank'}rel="noopener noreferrer"> Website{' 🌐'}</a></button>}
              {data?.imdb_id&&<button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid' ><a href={`https://www.imdb.com/title/${data?.imdb_id}`} target={'_blank'}rel="noopener noreferrer"> IMDB{' 🎬'}</a></button>}
              {data?.videos.results.length>0&&<button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid' onClick={()=>{setDrawer(true)}} >Trailer{' 🎞️'}</button>}
            </div>
            <div  className='grid grid-cols-3'>
              <button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid' onClick={AddToFavorite}> {!IsFavorited?'Favorite ❤️':'Unfavorite 🤍'}</button>
              <button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid' onClick={AddToWatchlist}> Watchlist {!IsWatchlisted?' +1':' --'}</button>
              <Link to={'cinedays'}><button className='bg-transparent border-[1px] text-blue-500 border-blue-300 rounded-md p-2 shadow-xl inline-grid' onClick={()=>{}}> Back{' ⬅️'}</button></Link>
            </div>
        </div>
    );
}

export default Features;