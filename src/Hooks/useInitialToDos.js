import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const useInitialToDos = () => {
  const [todo, setToDo] = useState(
    JSON.parse(
      window.localStorage.getItem('todoArray') || [
        {
          id: 0,
          task: 'Add some To Dos',
          completed: false,
        },
      ]
    )
  )
  return {
    todo: todo,
    addToDo: (value) =>
      setToDo([...todo, { id: uuid(), task: value, completed: false }]),
    toggleToDo: (id) =>
      setToDo(
        todo.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      ),
    handleDelete: (id) => setToDo(todo.filter((item) => item.id !== id)),
    handleEdit: (itemObj, newTask) => {
      setToDo(
        todo.map((item) => {
          if (item.id === itemObj.id) {
            item.task = newTask
            return item
          } else {
            return item
          }
        })
      )
    },
  }
}

export default useInitialToDos
