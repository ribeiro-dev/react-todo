import PropTypes from 'prop-types';

import { IconButton, Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <ListItem key={id}>
      <ListItemText
        primary={title}
        primaryTypographyProps={{ style: { textDecoration: completed ? 'line-through' : 'none', fontSize: '1.25rem' } }}
      />

      <ListItemIcon>
        <Checkbox
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
      </ListItemIcon>

      <IconButton
        color='error'
        sx={{ fontSize: '20px' }}
        aria-label="deletar"
        onClick={() => deleteTodo(id)}
      >
        <FaTrash />
      </IconButton>
    </ListItem >
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}