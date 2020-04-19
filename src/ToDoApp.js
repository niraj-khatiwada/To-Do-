import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

import { v4 as uuid } from 'uuid'

const styles = {
  paper: {
    height: '100vh',
  },
}

function ToDo(props) {
  const { classes } = props
  const [todo, setToDo] = useState([
    { id: 0, task: "Add some To-Do's", completed: false },
  ])

  const addToDo = (value) =>
    setToDo([...todo, { id: uuid(), task: value, completed: false }])

  const toggleToDo = (id) =>
    setToDo(
      todo.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      })
    )
  const handleDelete = (id) => setToDo(todo.filter((item) => item.id !== id))
  return (
    <Paper className={classes.paper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do's</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignContent="center">
        <Grid item lg={4} md={6} sm={8} xs={11}>
          <ToDoList
            todoArray={todo}
            toggleToDo={toggleToDo}
            handleDelete={handleDelete}
          />
          <ToDoForm addToDo={addToDo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(ToDo)
