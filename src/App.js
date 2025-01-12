
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [ todo,setTodo ] = useState(['Todo1','Todo2']);

  return (
    <div>
      <TodoList todo={todo} />
      <input type='text' />
      <button>タスクを追加</button>
      <button>タスクの削除</button>
      <div>残りのタスク: 0</div>
    </div>
  );
}

export default App;
