## `useLocalStorage` Demo

![alt text](public/image.png)

```typescript
// localStorage -> key:username, initialValue: "kartikbh56" (string)
const [username, setUsername, removeUsername] = useLocalStorage<string>(
  "username", // key
  "kartikbh56" // initial value
);

// localStorage -> key:todos, initialValue: Todos[] (object)
const [todos, setTodos, removeTodos] = useLocalStorage<Todo[]>(
  "todos", // key
  initialTodos // initial value
);
```
