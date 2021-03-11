//Step4.jsx
import React from "react";

function Step4(props) {
  

 
  return (
    
    <div>
      <p>Salary indication </p>

      <input 
        type="radio"
        id="Choice1"
        name="Salary"
        value="0 - 1.000"        
        onChange={props.handleChange}
      />
      <label  for="contactChoice1">0 - 1.000</label>

      <input
        type="radio"
        id="Choice2"
        name="Salary"
        value="1.000 - 2.000"
      
        onChange={props.handleChange}
      />
      <label for="contactChoice1">1.000 - 2.000</label>

      <input
        type="radio"
        id="Choice3"
        name="Salary"
        value="2.000 - 3.000"
       
        onChange={props.handleChange}
      />
      <label for="contactChoice1">2.000 - 3.000</label>

      <input
        type="radio"
        id="Choice4"
        name="Salary"
        value="3.000 - 4.000"
        
        onChange={props.handleChange}
      />
      <label for="contactChoice1">3.000 - 4.000</label>

      <input
        type="radio"
        id="Choice5"
        name="Salary"
        value="More than 4.000"
        
        onChange={props.handleChange}
        
      />
      <label for="contactChoice1">More than 4.000</label>
      {/* <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button> */}
    </div>
  );
}

export default Step4;
