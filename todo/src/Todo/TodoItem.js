import React from 'react';

export default function TodoItem(props) {

  const { name, toggleTodo, id, completed, removeTodo} = props;
  let input;
  let markthrough;
  if (completed) {
    markthrough = 'line-through';
  }else {
    markthrough = 'none';
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '2vh 4vh'
    }}>
        <h1 style={{textDecoration: markthrough}}>{name}</h1>
        <label>completed<input value={id} onClick={(e) => {
          toggleTodo(e.target.value);
        }} type='checkbox'/></label>
        <button style={{backgroundColor: 'grey'}}value={id} onClick={(e) => {
          removeTodo(e.target.value);
        }} type='checkbox'>delete</button>
    </div>
  );
}