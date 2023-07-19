import PropTypes from 'prop-types';

import { Button, Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <ListItem key={id}>
      <ListItemIcon>
        <Checkbox
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
      </ListItemIcon>
      <ListItemText>
        {title}
        <Button
          color='error'
          variant='outlined'
          onClick={() => deleteTodo(id)}
          sx={{ml: 2}}
        >
          Delete
        </Button>
    </ListItemText>
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