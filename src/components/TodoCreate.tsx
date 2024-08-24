import { useState } from "react";

export const TodoCreate = ({ createTodo }: any) => {
  const [title, setTitle] = useState("");

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-create">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter a todo"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};
