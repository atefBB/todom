import { useState } from "react";
import { IonIcon, IonItem } from "@ionic/react";
import { trashOutline, createOutline } from "ionicons/icons";

import { TodoEdit } from "./TodoEdit";

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
    <IonItem onDoubleClick={handleDoubleClick}>
      <div className="todo">
        <p className={`ion-float-left ${todo.completed && "completed"}`}>
          {todo.title}
        </p>

        <div className="ion-float-right actions">
          <IonIcon icon={trashOutline} onClick={handleDelete} />
          <IonIcon icon={createOutline} onClick={handleEdit} />
        </div>
      </div>
    </IonItem>
  );
};
