
import {BsSun,BsMoon} from 'react-icons/bs'
import {dark,white} from '../../features/Theme';
import { useDispatch, useSelector } from 'react-redux';

import './style.css'
const ColourTheme=()=>{
    const {Mode}=useSelector((state)=>state.Theme);
    const dispatch=useDispatch();
    const changetheme=()=>{Mode==='black'?dispatch(white()): dispatch(dark());}
    
    return(
        <div className="">
            <input type="checkbox" className="checkbox hidden" id="checkbox" onChange={changetheme} />
            <label htmlFor="checkbox" className="inline-grid grid-cols-3 rounded-xl place-content-center place-items-center ">
                <BsSun className='m-1 w-5 h-5 rounded-sm' />
                <BsMoon className='m-1 w-5 h-5 rounded-sm' />
                <div className={'w-7 h-7 absolute rounded-full trans'} id="ddd"/>
            </label>
        </div>
    );
}
export default ColourTheme;
