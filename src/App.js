import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]); //adding inputText after current listTodo (spread operator)
  };

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="todo-app-card">
      <h1 className="app-heading">TODO</h1>

      <TodoInput addList={addList} />
      <br />

      {listTodo.map((listItem, i) => {
        return (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
    </div>
  );
}

export default App;
