import React, { useContext } from 'react'
import {Name} from '../App'

const Superchild = () => {
    const {name}=useContext(Name)
    console.log(name);
  return (
    <div>Superchild


    </div>
  )
}

export default Superchild