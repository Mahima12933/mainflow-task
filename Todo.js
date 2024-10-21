import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
   
  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;  // Corrected string interpolation
  }, [tasks]);
  const addTask = (title)=>{
    const newTask = [...tasks, {title}]
    setTasks(newTask);
  }

  const removeTask = (index) =>{
    const newTask =[...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }

  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO</div>
        <div className='add-task'>
          <AddTask  addTask={addTask}/>
          </div>
        <div className='task'>
          {tasks.map((task, index) => (
            <ListTask key={index} title={task.title} removeTask={removeTask} index={index}/>  
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
