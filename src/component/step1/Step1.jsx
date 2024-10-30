import React from 'react';
import './step1.css'
function Step1({ formData, handleChange, nextStep }) {
  return (
    <div className='first_step'>
      <div className='step-input'>
        <h1>Step 1</h1>
      <div className='label_input'>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
      </div>
      <div className='label_input'>
        <label>Surname:</label>
        <input type='text' name='surname' value={formData.surname} onChange={handleChange} />
      </div>
    </div>  
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step1;
