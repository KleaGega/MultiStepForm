import { createContext, useEffect, useState } from "react";


export const FormContext = createContext();

export const FormProvider = ({children})=>{
   
  const initalData = {
    name :'',
    surname :'',
    age:'',
    gender:'',
    company:'',
    code:''
  }
  const [formData,setFormData] = useState (()=> {
    const saveData = JSON.parse(localStorage.getItem('formData'));
    return saveData || initalData;
  })
  const [currentStep,setStep] = useState (()=> {
    const saveStep = JSON.parse(localStorage.getItem('currentStep'));
    return saveStep || 1;
  })

  useEffect (()=>{
    localStorage.setItem('formData', JSON.stringify(formData))
    localStorage.setItem('currentStep', JSON.stringify(currentStep))
  },[formData,currentStep]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep =()=>{
    setStep((prevStep)=>prevStep+1);
  }
  const prevStep =()=>{
    setStep((prevStep)=>prevStep-1);
  }
  return (
    <FormContext.Provider value={{formData,currentStep,nextStep,prevStep, }}>
      {children}
    </FormContext.Provider>
  );

} 
