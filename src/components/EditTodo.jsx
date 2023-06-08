import React, { useState } from 'react';

const EditTodo = ({ editTodo, task }) => {
  const [updatedTask, setUpdatedTask] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(updatedTask, task.id); 
    setUpdatedTask('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="Todoinput"
          id="todo"
          value={updatedTask}
          placeholder="What would you like to do"
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      </div>
      <button type="submit" className="Todobtn">
        UPDATE
      </button>
    </form>
  );
};

export default EditTodo;
