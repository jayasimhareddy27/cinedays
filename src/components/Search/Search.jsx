import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../features/GenreorCategorySlice";
import { useNavigate } from "react-router-dom";

const Search=()=>{
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const [Query,setQuery]=useState('');
    const handleKeypress =(event)=>{
        if(event.key==='Enter'){
            dispatch(searchMovie(Query))
            navigate("/");
        }
    }
    return(
        <div>
            <input type="text" placeholder="Search" value={Query} className="bg-transparent border-b-2 outline-none animate-pulse placeholder-white " onChange={(e)=>{setQuery(e.target.value)}} onKeyPress={handleKeypress }/> 
        </div>
    )
}
export default Search;