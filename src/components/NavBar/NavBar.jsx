import React, { useEffect } from "react"
import { Link } from "react-router-dom";  

import {TbLogout,BsSearch,RiSideBarFill, ColourTheme,Search} from '../index'
import { useDispatch, useSelector } from 'react-redux';
import {open} from '../../features/DrawerSlice';
import { createSessionId, fetchToken,moviesApi } from "../../utils";
import { setUser } from "../../features/AuthSlice";

import genres from "../../assets/genres";
import './style.css'
const Navbar = () => {
  const dispatch=useDispatch();
  const {user,isAuthenticated,sessionId}=useSelector((state)=>state.User)
  
  const token=localStorage.getItem('request_token');
  const sessionIdFromLocalStorage=localStorage.getItem('session_id');
  const accountId=localStorage.getItem('accountId');
  useEffect(()=>{
    const logInUser=async()=>{
      if(token){
        if(sessionIdFromLocalStorage){
          const {data:userData}=await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData)); 
         
        }
        else{
          const sessionId=await createSessionId(); 
          const {data:userData}=await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));        

        }
      }
    }
    logInUser();
  },[dispatch, sessionIdFromLocalStorage, token])


  return (
    <>
      <ul className="grid grid-cols-3 justify-around pt-2 px-2 ">
        <li className="md:hidden"><RiSideBarFill className="stroke-2" onClick={()=>dispatch(open())}/></li>
        <li className=""><ColourTheme /></li>
        <li className="col-start-3 justify-self-end mr-2">
          {(accountId && sessionId && isAuthenticated)?
          <button ><img src={ genres.avater} alt={user} className="inline-block h-6 w-6 rounded-full dark:invert dark:filter mr-1"  /><Link to={`/profile/${accountId}`}>MyMovies</Link></button>:
          <button  onClick={fetchToken}><TbLogout className="inline mr-1"  />login</button>}
        </li>
        <li className="md:col-start-2 md:row-start-1 col-start-1 grid grid-cols-12 gap-0 pt-2 ">
          <BsSearch className="animate-slideleft mt-1 h-[1.4rem] w-5 col-span-1 "/>
          <div className="col-span-10 md:col-span-5 pl-4">
            <Search />
          </div>
        </li>
      </ul>
      <ul className="flex flex-row justify-center p-2">
      </ul>
      
      
    </>
  );
};

export default Navbar;
/**
 * 
 */