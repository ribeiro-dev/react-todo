import { useState, useEffect } from "react";

import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { IoMoon, IoSunny } from "react-icons/io5";

import PropTypes from 'prop-types';

import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";


export default function Index({ toggleTheme, theme }) {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });


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


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);



  return (
    <Paper component='div' elevation={4}
      sx={{
        width: '100%',
        minHeight: '100vh',
        borderRadius: 0,
        transition: 'background-color .3s ease'
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: '40px',
          }}>
          <Typography component='h1' variant='h4' sx={{fontWeight: 'bold'}}>TodoApp</Typography>

          <IconButton aria-label="toggle theme" onClick={toggleTheme}>
            {theme == 'light' ? <IoSunny /> : <IoMoon />}
          </IconButton>
        </Box>
        <NewTodoForm addTodo={addTodo} />

        <Typography mt={3} variant='h4' className="header">Lista de Todos:</Typography>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </Container>
    </Paper>
  )
}

Index.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};