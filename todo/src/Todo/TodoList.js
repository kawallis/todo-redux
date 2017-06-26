import React from 'react';
import ToDoItem from './TodoItem';

export default function TodoList(props) {

  const { addTodo, todos, filter, toggleTodo, removeTodo, filterTodo } = props;
  let input;
  return (
    <div>
      <ul>
        {todos.map((item, i) => {
          if(!filter) {
            return <ToDoItem key={i} id={item.id} name={item.name} toggleTodo={toggleTodo} completed={item.completed} removeTodo={removeTodo}/>;
          } else {
            if (!item.completed) {
              return <ToDoItem key={i} id={item.id} name={item.name} toggleTodo={toggleTodo} completed={item.completed} removeTodo={removeTodo}/>;
            }
          }
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
      <button style={{backgroundColor: 'grey'}} onClick={() => {
        filterTodo();
      }}>Filter</button>
    </div>
  );
}