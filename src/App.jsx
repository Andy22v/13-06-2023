import Navbar from "./components/navbar";
import Cards from "./components/cards";
import { todoList } from "./components/datas/Datas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-list">
        {todoList.map((todo) => (
          <Cards key={todo.id} data={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
