import React from "react";

function TodoList(props) {
  if (!props.item || props.item.trim() === "") {
    return null;
  }
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can" //icon
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
