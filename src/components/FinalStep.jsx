//FinalStep
import React from "react";

function FinalStep(props) {


  return (
    <div>
      <p className="element-animation-bottom">Name:{props.state.name}</p>
      <p className="element-animation-leftt">Email: {props.state.email}</p>
      <p className="element-animation-rightt">Phone number: {props.state.phone}</p>
      <p className="element-animation-top">Salary indication: {props.state.Salary} </p>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default FinalStep;
