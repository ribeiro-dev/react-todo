import { Collapse, List } from '@mui/material';

import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <List className="list">
      {/* placeholder */}
      {todos.length == 0 && "Nenhum item adicionado ainda"}

      <TransitionGroup>
        {todos.map(todo => {
          return (
            <Collapse key={todo.id} easing={'linear'}>
              <TodoItem
                {...todo} // pass as a prop
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </Collapse>
          )
        })}
      </TransitionGroup>
    </List >
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}