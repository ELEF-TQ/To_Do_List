import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [Task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(Task);
    setTask('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="Todoinput"
          id="todo"
          value={Task}
          placeholder="What would you like to do"
          onChange={(e) => setTask(e.target.value)}
        />
       
      </div>
      <button type="submit" className="Todobtn">
        ADD
      </button>
     
    </form>
  );
};

export default TodoForm;