import { IonList } from "@ionic/react";

import { TodoShow } from "./TodoShow";

export function TodoList({ todos, removeTodo, changeTodo }: any) {
  return (
    <IonList className="todo-list">
      {todos.map((todo: any) => {
        return (
          <TodoShow
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
          />
        );
      })}
    </IonList>
  );
}
