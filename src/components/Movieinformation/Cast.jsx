import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectGenreorCategory } from '../../features/GenreorCategorySlice';

const Cast=({data})=>{
    const dispatch=useDispatch();
    return (
        <div  className='grid md:grid-cols-6 grid-cols-4'>
            {data?.credits?.cast.map(( {id,name,profile_path,character} ) =>{ return( 
                profile_path &&
                <div key={name} className='animate-slideleft' onClick={()=>{dispatch(selectGenreorCategory(id)) }}>
                        <Link key={name} to={`/cinedays/actor/${id}`} className="inline-flex">  
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} className={"rounded-2xl p-2"} />  
                        </Link> 
                        <p className=''>{name}</p> <p className='text-sm text-slate-400 '>--{character}</p>
                </div>
            )}).slice(0,6)}
        </div>
    );
}

export default Cast;