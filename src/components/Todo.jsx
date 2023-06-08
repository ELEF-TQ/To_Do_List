import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div>
        <i className="bi bi-pencil-square mr-1 p-2" onClick={() => editTodo(task.id)}></i>
        <i className="bi bi-trash p-2" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  );
};

export default Todo;
