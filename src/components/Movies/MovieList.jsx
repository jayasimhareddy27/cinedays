import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB.js';
import { Isloading, Movies } from '../index.js';
import Pagination from '../Pagination/Pagination.jsx';
import Banner from './Banner.jsx';

const MovieList=()=>{
      
  const [page,setPage]=useState(1);
  const {genreIdorcategoryName,searchQuery}=useSelector((state)=>state.GenreorCategorySlice);
  const {data,isFetching }=useGetMoviesQuery({genreIdorcategoryName,page,searchQuery});
  
  if(isFetching){<Isloading/>}
    else{ 
      return (
        <>
          {page===1&&
          <Banner Movie={data?.results[0]}/>
          }
          <Movies data={data}/>
          <Pagination page={page} setPage={setPage} totalPages={data.total_pages}/>
        </>
      )
    }
}
export default MovieList