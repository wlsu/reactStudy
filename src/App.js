// import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from "react";
import Todos from './Todo';
// import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = useCallback(() => {setTodos((t) => [...t, "New Todo"]);}, [])

  const addTodo = () => {setTodos((t) => [...t, "New Todo"]);}

  console.log('render app');

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
