import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {close} from '../../features/DrawerSlice';
import { useGetGenresQuery } from "../../services/TMDB";
import {selectGenreorCategory} from '../../features/GenreorCategorySlice'

import genreIcon from "../../assets/genres";
import {AiOutlineFullscreenExit,redLogo,blueLogo} from '../index'
import IsLoading from '../State/IsLoading';

const Categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const Sidebar = () => {
  const {Mode}=useSelector((state)=>state.Theme);
  
  const dispatch=useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      const w= window.innerWidth;
      if(w>780) {
        dispatch(close())
      }
    });
  }, []);
  
  const {data,isFetching }=useGetGenresQuery();
  return (
    <>
     <div className=''>
      <div className='grid grid-cols-12 m-2'>
        <div className='md:hidden col-span-1'><button className='' ><AiOutlineFullscreenExit  onClick={()=>dispatch(close()) }/></button></div>
        <a className='col-span-9 p-2'  href='/'><img alt='icon' src={Mode==='black'?redLogo:blueLogo} className={""}/>
        </a>
      </div>
      <h3 className='px-2 text-slate-500'>Categories</h3>
      <div className='p-3'>
          {Categories.map(( {label, value} ) =>{ return( 
            <div key={value}  className='grid grid-cols-12 grid-flow-col-dense auto-cols-max' onClick={()=>{
                dispatch(selectGenreorCategory(value)) 
                dispatch(close())
              }}>
                <div className="col-start-1 md:col-end-3 col-end-2 py-1">
                  <Link key={value} className='' to={'/'} > <img src={genreIcon[label.toLowerCase()]} alt={label} className={"dark:filter dark:invert "} /> </Link>
                </div> 
                <div className="md:col-span-9 col-span-8 pl-3">
                  <Link key={label} to={'/'}> {label} </Link>
                </div> 
            </div>
          )})}

       </div>

       
       <h3 className='px-2 text-slate-500'>Genres</h3>
        <div className='p-3'>
          {isFetching?(<IsLoading/>): data?.genres.map(( {name,id} ) =>{ return( 
            <div key={name}  className='grid grid-cols-8 grid-flow-col-dense' onClick={()=>{
              dispatch(selectGenreorCategory(id))
              dispatch(close())
            }}>
              <div className="col-start-1 md:col-end-2 col-end-2 py-2">
                <Link key={name} to={'/'}> <img src={genreIcon[name.toLowerCase()]} alt={name} className={"dark:filter dark:invert "} /> </Link>
              </div> 
              <div className="md:col-span-10 col-span-9 pl-3">
                <Link key={name+1} to={'/'}> {name} </Link>
              </div>
            </div>
          )})}
        </div>


    </div>
    
    </>
  )
}

export default Sidebar
