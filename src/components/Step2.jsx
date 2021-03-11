//Step2.jsx
import React from "react";

function Step2(props){

    return(
            <div>
                    <p >Email: <input name="email" value={props.getState("email", '')} onChange={props.handleChange}/></p>
                    <button onClick={props.prev}>Previous</button>
                    <button onClick={props.next }>Next</button> 
            </div>
    );
}

export default Step2;