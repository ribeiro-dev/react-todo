import { List } from '@mui/material';

import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <List className="list">
      {/* placeholder */}
      {todos.length == 0 && "Nenhum item adicionado ainda"}

      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // pass as a prop
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}