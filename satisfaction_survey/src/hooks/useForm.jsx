import { useState } from "react";

export function useForm(steps) {
    const [currentStep,setCurrentStep]=useState(0)//pasta inicial é zero. 1º item do array
    
    function changeStep(i, e) {
        if(e) e.preventDefault();

        //não acessar paginas que não existam
        if (i < 0 || i >= steps.length) return
        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep:currentStep+1===steps.length?true:false,
    };
}