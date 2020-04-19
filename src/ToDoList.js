import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

import ToDo from './ToDo'

export default function ToDoList({
  todoArray,
  toggleToDo,
  handleDelete,
  handleEdit,
}) {
  return (
    <Paper style={{ margin: '1rem 0' }}>
      {todoArray.map((todo) => (
        <List>
          <ToDo
            item={todo}
            toggleToDo={toggleToDo}
            key={todo.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            
          />
        </List>
      ))}
    </Paper>
  )
}
