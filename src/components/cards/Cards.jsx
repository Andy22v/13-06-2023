import "./index.css";

const Cards = ({ data }) => {
  return (
    <div className={`Cards ${data.completed}`}>
      <h3>{data.todo}</h3>
    </div>
  );
};

export default Cards;
