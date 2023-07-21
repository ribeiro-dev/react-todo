import { List } from '@mui/material';

import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <List className="list">
      {todos.length == 0 && "Nenhum item adicionado ainda"}

      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            {...todo} // pass as a prop
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </List >
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}