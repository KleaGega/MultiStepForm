import React from 'react';
import './step2.css'
function Step2({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className='step_container'>
       <h1>Step 2</h1>
      <div className='label_input'> 
        <label>Age:</label>
      <input type='number' name='age' value={formData.age} onChange={handleChange} />
      </div>
      <div className='label_input'>
      <label>Gender:</label>
      <input 
        type='radio' 
        name='gender' 
        value='F' 
        checked={formData.gender === 'F'} 
        onChange={handleChange} 
      /> F
      <input 
        type='radio' 
        name='gender' 
        value='M' 
        checked={formData.gender === 'M'} 
        onChange={handleChange} 
      /> M
      </div>
      <div className='prev-next'>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default Step2;
