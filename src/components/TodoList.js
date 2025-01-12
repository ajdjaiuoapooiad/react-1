import React from 'react'
import Todo from './Todo';



const TodoList = ({todo}) => {
  return todo.map((todo) => <Todo todo={todo} />)
};

export default TodoList