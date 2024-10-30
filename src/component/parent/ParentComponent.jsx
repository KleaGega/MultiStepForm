import React, { useState } from 'react';
import useForm from '../../hook/useForm';
import Step1 from '../step1/Step1';
import Step2 from '../step2/Step2';
import Step3 from '../step3/Step3';
import './parent.css';

function ParentComponent() {
  const { formData, currentStep, handleChange, nextStep, prevStep, saveAllData, resetData } = useForm();
  const [savedData, setSavedData] = useState(null);

  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            saveAllData={() => {
              const data = saveAllData();
              setSavedData(data.formData); 
            }}
            resetData={() => {
              resetData(); 
              setSavedData(null); 
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="step-container">
      <h1>My Form</h1>
      {displayStep()}
      {savedData && (
        <div className="saved-data-display">
          <h3>Saved Data:</h3>
          <p>Name: {savedData.name}</p>
          <p>Surname: {savedData.surname}</p>
          <p>Age: {savedData.age}</p>
          <p>Gender: {savedData.gender}</p>
          <p>Company: {savedData.company}</p>
          <p>Code: {savedData.code}</p>
        </div>
      )}
    </div>
  );
}

export default ParentComponent;
