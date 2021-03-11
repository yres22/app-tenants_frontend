//App.jsx
import React from "react";

// import the progress bar
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalStep from "./FinalStep";

function App() {
    // setup the step content
    const step1Content = <Step1 />;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
  
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
      // return a boolean
      return 1;
    }
  
    function step3Validator() {
      // return a boolean
      return 1;
    }
    function step4Validator() {
      // return a boolean
      return 1;
    }
  
    function onFormSubmit() {
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed
    }
  
    return (
      <div className="App">
       
        <Steps>
          <StepProgressBar
          className="App"
            startingStep={0}
            onSubmit={onFormSubmit}
            steps={[
              {
                name: "step 1",
                content: <Step component={Step1} />,
              },
  
              {
                name: "step 2",
                content: <Step component={Step2} />,
                validator: step2Validator,
              },
              {
                name: "step 3",
                content: <Step component={Step3} />,
                validator: step3Validator,
              },
  
              {
                name: "step 4",
                content: <Step component={Step4} />,
                validator: step4Validator,
              },
  
              {
                name: "FinalStep",
                content: <Step component={FinalStep} />,
                validator: step4Validator,
              },
            ]}
          />
        </Steps>
  
        {/* <Steps>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={Step3} />
          <Step component={Step4} />
          <Step component={FinalStep} />
        </Steps> */}
      </div>
    );
  }
export default App;