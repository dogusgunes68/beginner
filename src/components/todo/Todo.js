import { useState } from "react";
import ListItem from "./ListItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    setTodo("");
    console.log(todoList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      {todoList.map((item) => (
        <ListItem key={todoList.indexOf(item)} item={item}></ListItem>
      ))}
    </div>
  );
}
