
import { useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Route,Routes } from 'react-router-dom';
import useAlan from "./Alan";

import {close} from '../features/DrawerSlice';
import '../index.css'

import {Actors,Movieinformation,Profile,NavBar,Sidebar,Drawer,MovieList} from './index'
const App=()=>{
    const alanBtnContainer = useRef();

    const dispatch=useDispatch();
    var w=window.screen.width
    useEffect(()=>{
      if(w>=500){
        dispatch(close())
    }
      w=window.screen.width
    },[window.screen.width])
    useAlan();

    return(
        <div className='md:grid md:grid-cols-12 dark:text-white scroll-smooth h-screen overflow-hidden '>
            <div className='bg-white dark:bg-neutral-900 hidden md:grid md:col-span-2 md:col-end-3 h-screen overflow-scroll overflow-x-hidden scroll'> 
                <Sidebar /> 
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-3 grid grid-rows-3">
                <div className='p-2 bg-blue-500  dark:bg-gray-800 row-end-1 rounded-sm shadow-2xl '> 
                    <NavBar /> 
                </div>
                <div className='bg-white dark:bg-black p-3 h-screen overflow-scroll pb-32'>
                    <Routes >
                        <Route path='/approved' exact element={<MovieList/>} ></Route>
                        <Route path='/' exact element={<MovieList/>} ></Route>
                        <Route path='https://jayasimhareddy27.github.io/' exact element={<MovieList/>} ></Route>
                        <Route path='/profile/:id' element={<Profile/>}></Route>
                        <Route path='/Movie/:id' element={<Movieinformation/>}></Route>
                        <Route path='Actor/:id' element={<Actors/>}></Route>
                    </Routes>
                
                </div>
                <div ref={alanBtnContainer} />


                <Drawer  />
            </div>
    </div>

    )
}
export default App;

