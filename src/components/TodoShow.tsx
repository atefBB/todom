import { useState } from "react";

import { TodoEdit } from "./TodoEdit";

import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

export const TodoShow = ({ todo, removeTodo, changeTodo }: any) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDoubleClick = () => {
    changeTodo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id: any, title: any) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  if (showEdit === true) {
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li className="todo" onDoubleClick={handleDoubleClick}>
      <p className={todo.completed && "completed"}>{todo.title}</p>

      <div className="actions">
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button onClick={handleEdit}>
          <EditIcon />
        </button>
      </div>
    </li>
  );
};
