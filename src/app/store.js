import {configureStore} from '@reduxjs/toolkit'
import {tmdbApi} from '../services/TMDB'
import ThemeReducer from '../features/Theme'
import DrawerReducer from '../features/DrawerSlice'
import GenreorCategoryReducer from '../features/GenreorCategorySlice'
import UserReducer from '../features/AuthSlice'

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]:tmdbApi.reducer,
        Theme:ThemeReducer,
        DrawerSlice:DrawerReducer,
        GenreorCategorySlice:GenreorCategoryReducer,
        User:UserReducer
    },
})