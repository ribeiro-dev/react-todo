import { useState } from "react"

import "./styles.css"

import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

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
    <>
      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">Lista de Todos:</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}