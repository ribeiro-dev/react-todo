import { useEffect, useState } from "react"

import { Container, Paper, Typography } from "@mui/material";

import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);



  function toggleTodo(id, completed) {

    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }
      ]
    })
  }

  return (
    <Paper component='div' elevation={4}
      sx={{
        width: '100%',
        height: '100vh',
        borderRadius: 0
      }}
    >
      <Container maxWidth='md'>
        <NewTodoForm addTodo={addTodo} />

        <Typography mt={3} variant='h4' className="header">Lista de Todos:</Typography>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </Container>
    </Paper>
  )
}