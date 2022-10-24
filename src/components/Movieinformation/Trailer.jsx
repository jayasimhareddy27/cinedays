import React from 'react';

const Trailer = ({Drawer,setDrawer,data}) => {
    

    return (
        <div className='fixed inset-0 bg-transparent grid place-content-center auto-rows-auto'>
        <button className="bg-red-200 md:place-self-end p-3 shadow-2xl rounded-md" onClick={() =>{setDrawer(false)}}>{'❌'}</button>
        <div >
          <iframe className=' md:w-[885px] md:h-[498px] bg-inherit p-3 w-[300px] h-[300px]' src={`https://www.youtube.com/embed/${data?.videos.results[0].key}`} title="Building A Event Registration Website With Django | Part 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>  
        </div>
    );
};

export default Trailer;