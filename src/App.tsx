import { useState } from "react";
import { setupIonicReact, IonPage, IonContent } from "@ionic/react";

import { TodoList } from "./components/TodoList";
import { TodoCreate } from "./components/TodoCreate";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./App.css";

setupIonicReact();

export const App = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos") as string) || [];

  const [todos, setTodos] = useState<any[]>(storedTodos);

  const createTodo = (title: any) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const updatedTodos = [...todos, newTodo];

    setTodos(() => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const removeTodo = (id: any) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(() => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const changeTodo = (id: any, title: any, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <main>
          <h1>
            <span>Do it today! Or leave it tomorrow !</span>
          </h1>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
          />
          <TodoCreate createTodo={createTodo} />
        </main>
      </IonContent>
    </IonPage>
  );
};
