import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useState} from "react"

function App() {

const [todo, setTodo] = useState([])


  return (
    <div className="App">
      <div className="form__container">
        <Form todo={todo} setTodo={setTodo}  />
      </div>
      <div className="todo__container">     
         <TodoList todos={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
