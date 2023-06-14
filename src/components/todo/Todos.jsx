import Cards from "../cards";
import "./index.css";

const Todos = ({ datas }) => {
  return (
    <div className="card-list">
      {datas.map((data) => (
        <Cards key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Todos;
