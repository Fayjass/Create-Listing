import React from 'react'
import './App.css'
import TodoList from './Todo/TodoList.js'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, completed: false, title: 'Купить хлеб' },
    { id: 1, completed: false, title: 'Купить молоко' },
    { id: 2, completed: false, title: 'Купить масло' },
  ])
  console.log('start', 'todos', todos)
  function toggleTodo(id) {
    console.log('id', id)
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        console.log('todos', todos)
        return item
      })
    )
  }
  return (
    <div className='wrapper'>
      <h1>React titorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
}

export default App
