import React from 'react';

const ListTask = ({ title, index, removeTask }) => {
  return (
    <>
      <div className='list-task'>
        {title}
        <button onClick={() => removeTask(index)} className='delete-btn'>
          Delete
        </button>
      </div>
    </>
  );
};

export default ListTask;
