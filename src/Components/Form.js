import React from "react";

const Form = () => {


    const handleClick = () =>{
        // alert("Done");
        document.body.style.backgroundColor="blue"
    }
  return (
    <div>
      <div className="mb-3 mt-5">
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="city" />
      </div>
      <input type="button" className="btn btn-primary" onClick={handleClick} value="Event"/>
    </div>
  );
};

export default Form;
