//Step3.jsx
import React from "react";

function Step3(props){
    return(
        <div>
            <p className="element-animation-bottom">Phone number: <input name="phone" value={props.getState("phone", '')} onChange={props.handleChange}/></p>
             {/* <button onClick={props.prev}>Previous</button>
            <button onClick={props.next }>Next</button>  */}
        </div>
    );
}

export default Step3;