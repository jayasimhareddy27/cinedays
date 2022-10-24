import { createSlice } from "@reduxjs/toolkit";
const initialState={
    drawer:false,
}
export const DrawerSlice=createSlice({
    name:'DrawerSlice', 
    initialState,
    reducers :{
        open:(state)=>{
            state.drawer=true
        },
        close:(state)=>{
            state.drawer=false
        }

    }
})
export default DrawerSlice.reducer
export const {open,close} = DrawerSlice.actions