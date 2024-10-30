import React from 'react';
import './step3.css';

function Step3({ formData, handleChange, prevStep, saveAllData, resetData }) {
  return (
    <div className='step_container'>
       <h1>Step 3</h1>
      <div className='label_input'> 
        <label>Company name:</label>
        <input type='text' name='company' value={formData.company} onChange={handleChange} />
      </div>
      <div className='label_input'>
        <label>Company code:</label>
        <input type='text' name='code' value={formData.code} onChange={handleChange} />
      </div>
      <div className='prev-next'>
        <button onClick={prevStep}>Prev</button>
        <button onClick={saveAllData}>Save</button>
        <button onClick={resetData}>Reset</button>
      </div>
    </div>
  );
}

export default Step3;
