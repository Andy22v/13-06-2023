import Navbar from "./components/navbar";
import Todo from "./components/todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-contain">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
