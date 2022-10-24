import { Rating } from '../index.js';
import React, { useState } from 'react';
import nophoto from '../../assets/genres/nophoto.png';

const Movie=({details})=>{
    const [isShown, setIsShown] = useState(false);
    const {poster_path,title}=details

    return(
        <>
        <div className='movie gap-3 rounded-lg duration-150 hover:scale-110 md:w-full' onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} >

            <img  className='movie-image shadow-md shadow-slate-700 rounded-3xl' src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:nophoto} alt={'a'} />
             
            <div className='movie-rating rounded-3xl p-1 grid'>
                <p className='md:text-xl font-medium text-black place-self-center dark:text-white'>{title} </p>            
                <div className='place-self-center '>
                    <Rating star={details?.vote_average} title={title} isShown={isShown}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Movie