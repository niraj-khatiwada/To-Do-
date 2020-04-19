import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Delete from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField'

import useToggle from './Hooks/useToggle'
import useForm from './Hooks/useForm'

export default function ToDo({ item, toggleToDo, handleDelete, handleEdit }) {
  const [isEditing, setEdit] = useToggle(false)
  const [editTask, setEditedTask] = useForm(item.task)
  return isEditing ? (
    <div style={{ padding: '0.5rem' }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          handleEdit(item, editTask)
          setEdit()
        }}
      >
        <TextField
          fullWidth
          value={editTask}
          onChange={(evt) => setEditedTask(evt.target.value)}
        ></TextField>
      </form>
    </div>
  ) : (
    <>
      <ListItem
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
          overflow: 'hidden',
          width: '70%',
          opacity: item.completed ? 0.5 : 1,
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
        <IconButton
          aria-label="Edit"
          onClick={() => {
            setEdit()
          }}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  )
}
