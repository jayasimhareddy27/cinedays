import { createSlice } from "@reduxjs/toolkit";
const initialState={
    genreIdorcategoryName:'',
    page:1,
    searchQuery:'',
}

export const GenreorCategorySlice=createSlice({
    name:'GenreorCategorySlice', 
    initialState,
    reducers:{
        selectGenreorCategory:(state,action)=>{
            state.genreIdorcategoryName=(action.payload)
            state.searchQuery='';
        },
        searchMovie:(state,action)=>{
            state.searchQuery=action.payload;
        }
    }
})
export default GenreorCategorySlice.reducer
export const {selectGenreorCategory,searchMovie} = GenreorCategorySlice.actions