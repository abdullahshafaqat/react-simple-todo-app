
import Navbar from 'd:/reactapp/todoapp/src/components/Navbar';
import React from 'react';
import { TodoProvider } from 'd:/reactapp/todoapp/src/Context/TodoContext';
import TodoApp from 'd:/reactapp/todoapp/src/components/Todo';

const App = () => {
  return (<>
    <Navbar />
<div className="container mx-auto min-w-auto my-5 rounded-xl p-3 bg-violet-300">
 
<h1 className=" text-3xl">Your Todos:</h1>
 
    
<TodoProvider>
      <div className="justify-center">
        <TodoApp />
      </div>
    </TodoProvider>

      </div>
    
    </>

  );
};

export default App;