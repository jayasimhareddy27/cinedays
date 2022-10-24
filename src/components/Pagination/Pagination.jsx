const Pagination=({page,totalPages,setPage})=>{
    const handleprev=()=>{
        if(page!==1)
            setPage((prevpage)=>prevpage-1)
    }
    const handlenext=()=>{
        if(page!==totalPages)
            setPage((prevpage)=>prevpage+1)
    }
    if(totalPages===0)
        return null
    return(
        <>
        <div className="grid place-content-center pt-3">
            <div className={`grid grid-cols-3 place-content-center `}>
                <button className={`rounded-lg bg-blue-400 p-2 ${page===1 && 'hover:cursor-not-allowed'} `} onClick={handleprev}>Prev</button>
                <p className="text-center text-3xl"> {page}</p>
                <button className={`rounded-lg bg-blue-400 p-2 ${page===totalPages && 'hover:cursor-not-allowed'} `} onClick={handlenext}>Next</button>
            </div>

        </div>
        </>
    )
}
export default Pagination;