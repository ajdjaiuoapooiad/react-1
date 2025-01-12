
import { useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [ todo,setTodo ] = useState([
    {id: 1,name: 'Todo1',completed: false},
  ]);

  const todoNameRef = useRef()

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value
    setTodo((prevTodo) => {
      return [...prevTodo, {id: '1',name: name, completed: false}];
    })
    todoNameRef.current.value = null;
    
  }

  return (
    <div>
      <TodoList todo={todo} />
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>タスクの削除</button>
      <div>残りのタスク: 0</div>
    </div>
  );
}

export default App;
