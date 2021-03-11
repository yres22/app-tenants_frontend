//Step1.jsx
import React from "react";

function Step1(props){
    return(
        <div>
                <p className=" element-animation-leftt" >Name: <input name="name" value={props.getState("name", '')} onChange={props.handleChange}/></p>
                <p className=" element-animation-rightt" >Surname: <input name="surname" value={props.getState("surname", '')} onChange={props.handleChange}/></p>
                {/* <button onClick={props.prev}>Previous</button>
                <button onClick={props.next }>Next</button>  */}
        </div>
    );
}

export default Step1;