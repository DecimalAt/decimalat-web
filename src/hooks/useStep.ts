import { useEffect, useState } from 'react';

type UseStepReturnType = {
    currentStep: number;
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
};

export const useStep = (initialStep = 0, onStepChange?: (step: number) => void): UseStepReturnType => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const setStep = (step: number) => {
        setCurrentStep(step);
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
    };

    useEffect(() => {
        if (onStepChange) {
            onStepChange(currentStep);
        }
    }, [currentStep, onStepChange]);

    return {
        currentStep,
        setStep,
        nextStep,
        prevStep,
    };
};
