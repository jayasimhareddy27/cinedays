import React, { useState } from 'react'
import {Movies} from '../index';
import { useParams } from 'react-router-dom'
import nophoto from '../../assets/genres/nophoto.png';

import IsLoading from '../State/IsLoading';
import { useGetActorsDetailsQuery ,useGetMoviesByActorsIdQuery} from '../../services/TMDB';
import Pagination from '../Pagination/Pagination';

const Actors =() => {
  const {id}=useParams();
  const [page,setPage]=useState(1);
  const {data,isFetching}=useGetActorsDetailsQuery(id);
  const {data:movies}=useGetMoviesByActorsIdQuery({id,page});
  return (
  <>
    {isFetching?<IsLoading/>:
    <div className='pb-16'>
      <div className='md:grid md:grid-cols-10 pb-5'>
          <div className='p-5 md:col-span-3'>
            <img alt='img' className='movie-image shadow-2xl shadow-black drop-shadow-md rounded-3xl' src={data?.profile_path?`https://image.tmdb.org/t/p/w780/${data?.profile_path}`:nophoto} />
          </div>
          <div className='md:col-span-7 '>
              <h1 className='p-5 text-5xl'>{data?.name}</h1>
              <h2 className='p-1 text-2xl'>Born: {new Date(data?.birthday).toDateString()}</h2>
              <p className='p-2 text-base'>{data?.biography}</p>
              <div  className='grid grid-cols-2'>
                  <button>imdb</button>
                  <button>Back</button>
              </div>
          </div>
        </div>
        <h2 className='text-6xl p-5 text-center'>Movies</h2>
        <div className=''>
        {movies?
              <Movies data={movies} numberOfMovies={11}/>
              :
                <IsLoading/>
              }
        </div>
        <Pagination page={page} setPage={setPage} totalPages={movies?.total_pages}/>
    </div>
    }
    </>
  )
}
export default Actors