import Navbar from "./components/navbar";
import Todo from "./components/todo";
import { todoList } from "./components/datas/Datas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-contain">
        <Todo datas={todoList} />
      </div>
    </div>
  );
}

export default App;
