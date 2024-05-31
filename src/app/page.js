
// export default todo
"use client"
import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);


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
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <div className='p-5 flex items-center text-center flex-col gap-2 md:gap-5 w-full m-auto'>
      <h1 className='font-bold text-4xl '> To-Do Next</h1>
      <form onSubmit={inputSubmit} className='flex gap-2 '>
        {/* input field */}
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" 
        className="border-2 border-gray-300 p-2 w-full m-auto " />
        {/* add button */}
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index} className='font-bold text-2xl flex gap-2 md:gap-5'>
            {task}
            <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}