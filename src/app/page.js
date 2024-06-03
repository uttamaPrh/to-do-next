
// export default todo
"use client"
import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);
console.log(task)

  // Uppdate the value of task done by setTask
  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form by stopping the page from refreshing
    if (task.trim()) { // check if the input is non empty
      setTasksArray([...tasksArray, task]); //if non empty add the task to the tasksArray
      setTask(''); // resetes the value of task and clears the  input field
    }
  };

  const handleDelete = (index) => {
  tasksArray.splice(index, 1); // delete the task
  setTasksArray([...tasksArray]); // update the tasksArray 
    console.log(index, 'deleted')
    };

  return (
    <div className='p-5 flex items-center text-center flex-col gap-2 md:gap-5 w-full m-auto'>
      <h1 className='font-bold text-4xl '> To-Do Next</h1>
      <form onSubmit={inputSubmit} className='flex gap-2 '>
        {/* input field */}
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task"
          className="border-2 border-gray-300 p-2 w-full m-auto rounded" />
        {/* add button */}
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index} className='flex m-2 gap-2 items-center justify-between md:gap-10'>
            <div className='p-2  flex flex-col md:p-3'>
              <div className='text-2xl' >{task}</div>
            </div>
            <button onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded">
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}