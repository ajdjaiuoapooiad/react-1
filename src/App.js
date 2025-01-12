
import { useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [ todos,setTodos ] = useState([
    {id: 1,name: 'Todo1',completed: false},
  ]);

  const todoNameRef = useRef()

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value
    if(name==='') return;
    setTodos((prevTodo) => {
      return [...prevTodo, {id: uuidv4(),name: name, completed: false}];
    })
    todoNameRef.current.value = null;
    
  }

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodo)
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>タスクの削除</button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
