import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import useForm from './Hooks/useForm'

export default function ToDoForm(props) {
  const [task, setTask, resetForm] = useForm('')
  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    props.addToDo(task)
    resetForm()
  }
  return (
    <Paper style={{ padding: '0.5rem' }}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="What do you want to do today?"
          value={task}
          onChange={(evt) => setTask(evt.target.value)}
          fullWidth
        />
      </form>
    </Paper>
  )
}
