
import { useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import {dark,white} from '../features/Theme';
import { searchMovie } from "../features/GenreorCategorySlice";
import { fetchToken } from "../utils";
import {selectGenreorCategory} from '../features/GenreorCategorySlice'

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const useAlan = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({command,mode,Query,genres,genreOrCategory}) => {
        if(command==='changeMode'){
          if (mode === "white") {
            dispatch(white())
          } else {
            dispatch(dark())
          }
        }
        else if(command === "chooseGenre"){
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase(),
          );
          if (foundGenre) {
            dispatch(selectGenreorCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")? "top_rated": genreOrCategory;
            dispatch(selectGenreorCategory(category));
          }
        } 
        else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        } 
        else if (command === "search") {
          dispatch(searchMovie(Query))
          navigate("/");
        }
      },
    })
  }, []);
};

export default useAlan;
/**



 */