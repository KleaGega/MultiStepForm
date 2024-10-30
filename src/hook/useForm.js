import { useEffect, useState } from "react";

const useForm = () => {


  const [formData, setFormData] = useState({});
  const [currentStep, setStep] = useState(1);

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("formData")); 
    const saveStep = JSON.parse(localStorage.getItem("currentStep")); 
    if (saveData) {
      setFormData(saveData);
    }
    if (saveStep) {
      setStep(saveStep);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }
    
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  };

  const saveAllData = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("currentStep", JSON.stringify(currentStep));
    console.log("All data saved:", formData, "Current Step:", currentStep);
    return { formData, currentStep };
  };

  const resetData = () => {
    setFormData({});
    setStep(1);
    localStorage.clear();
  };

  return { formData, currentStep, handleChange, nextStep, prevStep, saveAllData, resetData };
};

export default useForm;
