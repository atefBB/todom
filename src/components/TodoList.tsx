import { TodoShow } from "./TodoShow";

export function TodoList({ todos, removeTodo, changeTodo }: any) {
  return (
    <ul className="todo-list">
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
    </ul>
  );
}
