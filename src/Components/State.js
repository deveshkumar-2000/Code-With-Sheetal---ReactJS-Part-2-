import React, { useState,useRef } from 'react'


const State = () => {
    const [name,setName]=useState("enter your name")
    const [gender, setgender]=useState("enter your gender")
    const inputref=useRef()

    const handleCheck=(e)=>{
        const flag=e.target.value;
        if(flag){
            setgender(e.target.value);
        }
    }

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    
    const handleClick=()=>{
        console.log(inputref.current.value);
    }


  return (

    <div>

        <h2>My Name is {name}</h2>

        <div>
            <input type="text" value={name} className='form-control' onChange={handleChange} />
        </div>

        <div className='mb-3'>
            <input type="text" ref={inputref} className='form-control' id='' value={name} onChange={handleChange} />
        </div>
        <button onClick={handleClick}>ref example</button>


        <div>
            <input type="radio" value="Female" onChange={handleCheck} name='gender' /> Female
            <input type="radio" value="Male" onChange={handleCheck} name='gender' /> Male
        </div>
        
        <h2>My Gender is {gender}</h2>
    </div>
  )
}

export default State