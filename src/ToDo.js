import React, { useState } from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Delete from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'
import { v4 as uuid } from 'uuid'

export default function ToDo({ item, toggleToDo, handleDelete }) {
  return (
    <>
      <ListItem
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        <Checkbox
          checked={item.completed}
          onClick={() => toggleToDo(item.id)}
        ></Checkbox>
        <ListItemText>{item.task}</ListItemText>
      </ListItem>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => handleDelete(item.id)}>
          <Delete />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <Divider />
    </>
  )
}
