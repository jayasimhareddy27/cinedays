import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Mode:'White',
    pos:"0px",
}
export const Theme=createSlice({
    name:'Theme', 
    initialState,
    reducers :{
        dark:(state)=>{
            state.Mode='black'
            state.pos="-30px"
            document.documentElement.style.setProperty('--div-trasnlateX',state.pos)     
            document.documentElement.style.setProperty('--background-color',state.Mode)
            localStorage.setItem('Theme',JSON.stringify(state.Mode))   
            window.document.body.classList.add('dark')     
        },
        white:(state)=>{
            state.Mode='white'
            state.pos="0px"
            document.documentElement.style.setProperty('--background-color',state.Mode)
            document.documentElement.style.setProperty('--div-trasnlateX',state.pos)        
            localStorage.setItem('Theme',JSON.stringify(state.Mode))
            window.document.body.classList.remove('dark')
        },
    }
})
export default Theme.reducer
export const {dark,white} = Theme.actions