import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

interface Todo {
  id: string;
  todo: string;
}

const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    todo: "Drink water",
  },
  {
    id: crypto.randomUUID(),
    todo: "Do Pushups",
  },
];

function LocalStorageDemo() {
  // localStorage -> key:username, initialValue: "kartikbh56" (string)
  const [username, setUsername, removeUsername] = useLocalStorage<string>(
    "username",
    "kartikbh56"
  );

  // localStorage -> key:todos, initialValue: Todos[] (object)
  const [todos, setTodos, removeTodos] = useLocalStorage<Todo[]>(
    "todos",
    initialTodos
  );

  // for user inputs
  const [newTodo, setNewTodo] = useState("");
  const [usernameInput, setUsernameInput] = useState("");

  function addTodo() {
    if (!newTodo.trim()) return;

    // add todo object to the state(todos) and sync it with localStorage
    const newTodos: Todo[] = [
      ...todos,
      {
        id: crypto.randomUUID(),
        todo: newTodo,
      },
    ];

    // this will update the todos state and sync it with localStorage data
    setTodos(newTodos);

    setNewTodo("");
  }

  function deleteTodo(id: string) {
    const newTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>useLocalStorage Demo</h1>

      <section>
        <h2>Username</h2>
        <p>Current Username: {username}</p>
        <input
          type="text"
          value={usernameInput}
          placeholder="Enter username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (!usernameInput.trim()) return;
            setUsername(usernameInput);
            setUsernameInput("");
          }}
        >
          Save Username
        </button>
        <button onClick={removeUsername}>Remove Username</button>
      </section>

      <hr />

      <section>
        <h2>Todos</h2>

        <input
          type="text"
          value={newTodo}
          placeholder="Enter a todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
        <button onClick={removeTodos}>Clear Todos</button>

        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              {todo.todo}

              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "8px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocalStorageDemo;
