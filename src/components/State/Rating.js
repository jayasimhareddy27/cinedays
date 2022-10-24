
const Rating=({star,title,isShown})=>{

    const stars = [];
    var rem=star/2;
    for (let i = 0; i<5; i++) {
        if(rem>=1){
            stars.push(1)
            rem--;
        }
        else if(rem>0 && rem<1){
            stars.push(0.5)
            rem=0;
        }
        else if(rem===0)
            stars.push(0)
    }
    return(
        <>
        <div className="inline-flex md:gap-1 gap-0" key={`${title}+${star}`}  >
             {stars.map(ele=>{
                if(ele===1) return <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-400 " width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                else if(ele===0.5) return <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-400 " width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                else if(ele===0) return <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-200 " width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            })}
               {isShown && (<div>{star}</div>)}
        </div>
        </>
    )
};
export default Rating;