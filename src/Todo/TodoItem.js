import React from 'react'
import PropTypes from 'prop-types'
const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // выровняли по вертикали все элементы, чтобы они были на одной линии
    padding: '.5rem 1rem', //отступы вокруг строки для обрисовки прямоугольника
    border: '1px solid blue', // рисуем блок синего цвета
    borderRadius: '10px', //округляем углы нарисованного блока
    marginBottom: '.5rem', // отступ снизу от блока
  },
  input: {
    marginRight: '1rem',
  },
}

function TodoItem({ todo, index, onChange }) {
  let classes = []
  console.log('todo.completed', todo.completed)
  if (todo.completed) {
    classes.push('done')
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {/* пробел */}
        .&nbsp;
        {todo.title}
      </span>
      {/* &times - это крестик на кнопке */}
      <button className='rm'>&times;</button>
    </li>
  )
}
TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}
export default TodoItem
