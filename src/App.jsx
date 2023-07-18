import { useEffect, useState } from "react"

import { createTheme, ThemeProvider } from '@mui/material';
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { IoMoon, IoSunny } from "react-icons/io5";

import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });



export default function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  function toggleTheme() {

    setTheme(currentTheme => {
      const newTheme = currentTheme == 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }

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
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>

      <Paper component='div' elevation={4}
        sx={{
          width: '100%',
          minHeight: '100vh',
          borderRadius: 0,
          transition: 'background-color .3s ease'
        }}
      >
        <Container maxWidth='md'>
          <Box sx={{ textAlign: 'right', py: '10px' }}>
            <IconButton aria-label="toggle theme" onClick={toggleTheme}>
              {theme == 'light' ? <IoSunny /> : <IoMoon />}
            </IconButton>
          </Box>
          <NewTodoForm addTodo={addTodo} />

          <Typography mt={3} variant='h4' className="header">Lista de Todos:</Typography>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </Container>
      </Paper>

    </ThemeProvider>
  )
}