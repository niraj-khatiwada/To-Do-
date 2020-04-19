import React, { useState, useEffect } from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import useInitialToDos from './Hooks/useInitialToDoss'

const styles = {
  paper: {
    height: '100vh',
  },
}

const { todo, addToDo, toggleToDo, handleDelete, handleEdit } = useInitialToDos
useEffect(() => {
  window.localStorage.setItem('todoArray', JSON.stringify(todo))
}, [todo])

function ToDo(props) {
  const { classes } = props
  return (
    <Paper className={classes.paper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do's</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignContent="center">
        <Grid item xl={3} lg={4} md={6} sm={8} xs={11}>
          <ToDoList
            todoArray={todo}
            toggleToDo={toggleToDo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <ToDoForm addToDo={addToDo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(ToDo)
