import { useState } from "react";
import PropTypes from 'prop-types';

import { Box, Button, TextField, Typography } from "@mui/material";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem == "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <Box component='form' onSubmit={handleSubmit} className="new-item-form" sx={{ background: 'background.default' }}>
      <Box className="form-row" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' mb={2}>Criar Novo Item</Typography>
        {/* <label htmlFor="item">Novo item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" name="item" id="item" /> */}
        <TextField
          label='Novo Item'
          variant="outlined"
        />
      </Box>
      <Button variant='contained' fullWidth className="btn">Criar</Button>
    </Box>
  );
}

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}