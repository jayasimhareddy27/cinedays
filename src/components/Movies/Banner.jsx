import { Link } from 'react-router-dom';

const Banner=({Movie})=>{
    return(
        <>
        <Link to={`/movie/${Movie.id}`}>
            
        <div className='relative animate-slowfade'>
            <div className=''>
                <img alt='banner' className='brightness-50 h-[27rem] w-full object-cover rounded-lg shadow-xl drop-shadow-2xl' src={`https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}`}/>
            </div>
            <div className='absolute bottom-20 left-11 '>
                <h1 className="text-2xl text-white">{Movie?.title}</h1>
                <div className="pt-4 grid grid-cols-2">
                <p className="text-xs md:text-lg text-white">{Movie?.overview}</p>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}
export default Banner;