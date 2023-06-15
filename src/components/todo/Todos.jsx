import { useState } from "react";
import Cards from "../cards";
import "./index.css";
import { todoList } from "../datas/Datas";

const Todos = () => {
  const [todos, setTodos] = useState(todoList);

  const handleTodos = (status) => {
    const completed = todoList.filter((todo) => todo.completed === true);
    const incompleted = todoList.filter((todo) => todo.completed === false);

    switch (status) {
      case "completed":
        setTodos(completed);
        break;
      case "incompleted":
        setTodos(incompleted);
        break;
      default:
        setTodos(todoList);
    }
  };

  return (
    <div className="Todos">
      <div className="btn-contain">
        <button
          className="btn completed"
          onClick={() => handleTodos("completed")}
        >
          completed
        </button>
        <button
          className="btn incompleted"
          onClick={() => handleTodos("incompleted")}
        >
          incompleted
        </button>
        <button className="btn all" onClick={() => handleTodos("")}>
          all
        </button>
      </div>
      <p>Todos {todos.length}</p>
      <div className="card-list list-scroll">
        {todos.map((todo) => (
          <Cards key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
