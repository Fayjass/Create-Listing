import React from 'react'
import TodoItem from './TodoItem'
// import TodoMenu from './TodoMenu'
import PropTypes from 'prop-types'
// создаем js-объект со стилями
const styles = {
  ul: {
    // для того, чтобы убрать дефолтное поведение ul
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}

function TodoList(props) {
  return (
    <div>
      {/* //придаем стиль (styles.ul) элементу ul // =none(точки исчезли) */}
      <ul style={styles.ul}>
        {props.todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          )
        })}
      </ul>
    </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}
export default TodoList
