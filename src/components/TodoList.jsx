import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <ul className="list">
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
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}