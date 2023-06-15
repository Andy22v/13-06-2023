import "./index.css";

const Cards = (todo) => {
  const user =
    "https://icon2.cleanpng.com/20180401/huw/kisspng-user-profile-computer-icons-clip-art-profile-5ac092f6be0823.5326777215225699747784.jpg";

  return (
    <>
      <div className={`Cards ${todo.todo.completed}`}>
        <p>{(todo.todo.completed === true && "✅") || "🗹"}</p>
        <img src={todo.todo.image || user} alt="" />
        <h3>{todo.todo.todo}</h3>
      </div>
    </>
  );
};

export default Cards;
