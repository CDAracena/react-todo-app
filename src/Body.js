import React from 'react';
import './body.css';
import 'font-awesome/css/font-awesome.min.css';


const Body = ({inputText, addTodo, todos, todoStatus, removeTodo, toggleClass}) => {
  return (
    <div className="main-body-container">
        <div className="input-boxes">
          <input type="text" placeholder="Todo Title" className="input-box" onChange={inputText}/>
          <button onClick={addTodo}> Add </button>
          {todos.map(todo => <li key={todo.id} className={`${toggleClass}`}><input type="checkbox" onClick={()=> todoStatus(todo)}/> {todo.text} <button onClick={()=> removeTodo(todo)}>Delete </button> </li>)}
        </div>
    </div>
  )
}

export default Body;
