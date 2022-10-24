import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {close} from '../../features/DrawerSlice';

import Sidebar from "./Sidebar";

const Drawer=()=> {
  const dispatch=useDispatch()
  const {drawer}=useSelector((state)=>state.DrawerSlice)
  return (
    <div className={"fixed inset-0 overflow-scroll overflow-x-hidden delay-500" +(drawer? "translate-x-0"  : " translate-x-full")}>
        <div className={ "overflow-scroll overflow-x-hidden w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 dark:bg-neutral-900" + (drawer ? " translate-x-0 " : " translate-x-full ")}>
          <Sidebar />
      </div>
      <div className="w-screen h-full cursor-pointer " onClick={() =>dispatch(close()) }></div>
    </div>
  );
}
export default Drawer;

