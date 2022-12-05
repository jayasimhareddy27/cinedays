import React, {  useState }  from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import genreIcon from "../../assets/genres";
import { Link } from 'react-router-dom';
import {Movies} from '../index';
import nophoto from '../../assets/genres/nophoto.png';

import IsLoading from '../State/IsLoading';
import Rating from '../State/Rating';
import { useDispatch } from 'react-redux';
import { selectGenreorCategory } from '../../features/GenreorCategorySlice';
import Trailer from './Trailer';
import Features from './Features';
import Cast from './Cast';

const Movieinformation = () => {
  
  
  const dispatch=useDispatch();
  const [Drawer,setDrawer]=useState();

  const {id}=useParams();

  const {data,isFetching}=useGetMovieQuery(id);
  

  const {data:recommendations}=useGetRecommendationsQuery({list:'/recommendations',movie_id:id});
 
 
  return (
    <>
    
    {isFetching?<IsLoading/>:
    <div className='pb-16'>
      <div className='md:grid md:grid-cols-10 pb-5'>
        <div className='p-5 md:col-span-3'>
          <img  className='movie-image shadow-2xl shadow-black drop-shadow-md rounded-3xl' src={data?.poster_path?`https://image.tmdb.org/t/p/w500/${data?.poster_path}`:nophoto} alt={'movie_poster'} />
        </div>
        <div className='md:col-span-7'>
            <h1 className='p-5 text-5xl text-center'>{data?.original_title}{`(${data?.release_date.split('-')[0]})`}</h1><h2 className='p-1 text-lg text-center'>{`${data?.tagline}`}</h2>
            <div className="grid md:grid-cols-2 justify-items-center">
              <Rating star={data?.vote_average} title={data?.title} isShown={()=>{}}/>
              <p className='p-3 text-lg'> {`${data?.runtime}/${new Date(data?.release_date).toDateString()}/${!data?.original_language?'NA':data?.original_language}`}</p>
            </div>
            <div  className='grid grid-flow-col place-items-center justify-evenly'>
              {data?.genres.map(( {id, name} ) =>{ return( 
                <div key={name} className='inline-flex' onClick={()=>{dispatch(selectGenreorCategory(id)) }}>
                      <Link key={name} to={'/'} className="">  <img src={genreIcon[name.toLowerCase()]} alt={name} className={"dark:invert inline-flex h-6 w-6"} /> <p className='inline-flex'>{name}</p> </Link>  
                  </div>
              )})}
            </div>
            
            <h2 className='text-3xl p-5 text-left'>Overview</h2><h2 className='text-center pl-5'>{`${data?.overview}`}</h2>
            {data?.credits?.cast.length>1&&<h2 className='text-3xl p-5 text-left'>Top Cast</h2>}
            <Cast data={data}/>
            <Features data={data} setDrawer={setDrawer}/>
        </div>

      </div>
      <h2 className='text-6xl p-5 text-center'>You might also like</h2>
        {recommendations?<Movies data={recommendations} numberOfMovies={8}/>:<p>recommendations Not availble</p>}
      {Drawer&&<Trailer data={data} Drawer={Drawer} setDrawer={setDrawer}/>}
    </div>
    }

    </>
  )
}

export default Movieinformation

