import React from 'react';
import ToDoItem from './TodoItem';

export default function TodoList(props) {

  const { addTodo, todos, toggleTodo, removeTodo } = props;
  let input;
  return (
    <div>
      <ul>
        {todos.map((item, i) => {
          return <ToDoItem key={i} id={item.id} name={item.name} toggleTodo={toggleTodo} completed={item.completed} removeTodo={removeTodo}/>;
        })}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}
      >
        <label>Add an thing<input ref={node => {
          input = node;
        }} /></label>
      </form>
    </div>
  );
}