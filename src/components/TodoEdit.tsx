import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";

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
    <form className="flex items-center justify-between w-full">
      <input
        className="form-input rounded"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <IonIcon icon={checkmarkOutline} onClick={handleSubmit} />
    </form>
  );
};
