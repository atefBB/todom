import { useState } from "react";

import { CheckIcon } from "../Icons/CheckIcon";

export const TodoEdit = ({ todo, onSubmit }: any) => {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        <CheckIcon />
      </button>
    </form>
  );
};
