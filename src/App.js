import React from 'react'
import './App.css'
import TodoList from './Todo/TodoList.js'
import Context from './context.js'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    // ! now don`t use hook "useState" into import React(?)
    { id: 0, completed: false, title: 'Купить хлеб' },
    { id: 1, completed: false, title: 'Купить молоко' },
    { id: 2, completed: false, title: 'Купить масло' },
  ])
  console.log('start', 'todos', todos)

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        console.log('todos', todos)
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className='wrapper'>
        <h1>React titorial</h1>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>the list is closed</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
