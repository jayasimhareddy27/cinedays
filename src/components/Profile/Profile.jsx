import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetListQuery } from '../../services/TMDB';
import Movies from '../Movies/Movies';
import IsLoading from '../State/IsLoading';

const Profile = () => {
  const Logout=()=>{
    localStorage.clear();
    window.location.href='/'
  }
  
  const {user:{username},id:account_id}=useSelector((state)=>state.User);  
  const { data: favorites, refetch: refetchFavorites } = useGetListQuery({  listName: "favorite",  accountId: account_id,  sessionId: localStorage.getItem("session_id"),  page: 1,});
  const { data: watchlists, refetch: refetchWatchlist } = useGetListQuery({  listName: "watchlist",  accountId: account_id,  sessionId: localStorage.getItem("session_id"),  page: 1,});
  useEffect(() => {
    refetchFavorites();
  }, [refetchFavorites]);
  useEffect(() => {
    refetchWatchlist();
  }, [ refetchWatchlist]);

  return (
    <>{!username?<IsLoading/>:
    <>
      <button onClick={Logout} className="float-right">
        <h5 className=' text-base dark:text-white'>Logout</h5>
      </button>
      <h1 className='text-center text-5xl dark:text-white '>My Profile</h1>
      <h1 className='text-2xl dark:text-white pb-4'>favorited Movies</h1>
      <Movies data={favorites} numberOfMovies={8}/>
      <h1 className='text-2xl dark:text-white pb-4'>Watchlisted Movies</h1>
      <Movies data={watchlists} numberOfMovies={8}/>
    </>  
    } 
    </>
  )
}

export default Profile