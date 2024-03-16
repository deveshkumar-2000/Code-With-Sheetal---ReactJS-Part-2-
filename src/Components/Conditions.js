import React from 'react'
import Form from './Form'

const Conditions = (props) => {
  if(props.check){
    return <h2>condition true return </h2>
  }else{
    return <Form/>
  }
}

export default Conditions 