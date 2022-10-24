import React from 'react'
import {Movie} from '../index.js'

import { Link } from 'react-router-dom';
const Movies = ({data,numberOfMovies}) => {
  
  return (
    <div className='md:grid-flow-row-dense m-3 md:grid md:grid-cols-5 md:gap-8  sm:grid sm:grid-cols-4 sm:gap-3 lg:grid lg:grid-cols-5 grid grid-cols-2 gap-4 animate-slideup'>
        {data?.results.map((details)=>{
          return(
            <div key={details.title}>
              <Link to={`/movie/${details.id}`}><Movie details={details} /></Link>
            </div>
          )
        }).slice(1,numberOfMovies)}
          
    </div>
  
  )
}

export default Movies
