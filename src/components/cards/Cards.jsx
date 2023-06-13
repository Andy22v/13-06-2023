/* eslint-disable react/prop-types */
import "./index.css";

const Cards = ({ data }) => {
  return (
    <div className="Cards">
      <h3>{data.todo}</h3>
    </div>
  );
};

export default Cards;
