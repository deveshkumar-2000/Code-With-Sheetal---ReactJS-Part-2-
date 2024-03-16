import React, { useEffect, useState } from 'react'

const Effect = () => {

    const[h3count, setH3]=useState(0);
    const[h4count, setH4]=useState(0);

    useEffect(()=>{
        alert("Thank you");
    },[h3count==5]) // [] execute only once (reload) 

    const handleClick=()=>{
        setH3(h3count+1);
    }


  return (
    <div>
        <h3>Count: {h3count}</h3>
        <button onClick={handleClick}>count h3</button>
        
        <h4>Count: {h4count}</h4>
        <button onClick={()=>setH4(h4count+1)}> count h4</button>
    </div>
  )
}

export default Effect