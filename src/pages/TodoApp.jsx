import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoApp() {
  return (
    <main>
      <TodoForm />
      <section>
        <TodoList isDoneState={false} />
        <hr />
        <TodoList isDoneState={true} />
      </section>
    </main>
  );
}
