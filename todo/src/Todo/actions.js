import {ADD_TODO, REMOVE_TODO} from './constants';

export function addTodo(payload = 'go to laundry mat') {
  return {
    type: ADD_TODO,
    payload
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload
  };
}