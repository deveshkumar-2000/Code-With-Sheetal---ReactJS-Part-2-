import React, { useState } from 'react'

const Checkbox = () => {
    const[checkboxvalue, setCheckboxvalue]=useState([])


    const handleCheck=(e)=>{
        const flag=e.target.checked;
        const value=e.target.value;
        console.log(value);
        if(flag){
            setCheckboxvalue([...checkboxvalue,value])
        }
        else{
            setCheckboxvalue(checkboxvalue.filter((e)=>e!=value))
        }

    }

    const handleClick=()=>{
        console.log(checkboxvalue);
    }


  return (
    <div>
        <input type="checkbox" name='' id='' onChange={handleCheck} value="Gujarat"  /> Gujarat
        <input type="checkbox" name='' id='' onChange={handleCheck} value="Mumbai" /> Mumbai
        <input type="checkbox" name='' id='' onChange={handleCheck} value="Delhi" /> Delhi
        <input type="checkbox" name='' id='' onChange={handleCheck} value="Goa" /> Goa
        <button onClick={handleClick}>get checkbox value</button>

    </div>
  )
}

export default Checkbox