import React, { useState } from 'react';

const AddTask = ({ addTask }) => {  // Destructure addTask from props
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.trim()) {  // Ensure the task is not empty
      addTask(value);     // Call the addTask function passed as a prop
      setValue("");       // Clear the input after adding
    }
  };

  return (
    <>
      <div className='input-container'>
        <input
          type='text'
          className='input'
          placeholder='Add a new Task'
          value={value}  // Bind value to input
          onChange={(e) => setValue(e.target.value)}  // Update input value
        />
        <button onClick={addItem} className='add-btn'>ADD</button>
      </div>
    </>
  );
};

export default AddTask;
