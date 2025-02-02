
import React, { useContext, useState } from 'react';
import { TodoContext } from 'd:/reactapp/todoapp/src/Context/TodoContext';

const TodoApp = () => {
  const { tasks, addTask, deleteTask } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div className=" mt-2  p-4 w-96">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="  hover:border-blue-500 text-xl flex-1 border rounded p-2  
          ml-32 pr-40  "
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="    ml-2 bg-blue-500 text-white text-lg flex items-center
           justify-center rounded  p-4 pr-7  w-full cursor-pointer"
        >
          Add
        </button>
        </div>
      
       
        <ul className="list-disc pl-5 ml-30 ">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="border rounded mb-2 p-4 hover:border-blue-500">{task}</span>
            <button
              onClick={() => deleteTask(task)}
              className="text-white bg-blue-500 ml-2  mb-2  p-4 rounded cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;