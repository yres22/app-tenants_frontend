//App.jsx
import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalStep from "./FinalStep";

function App() {
  return (
    <div>
      <Steps>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
        <Step component={Step4} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}
export default App;