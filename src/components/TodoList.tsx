import React, { useState } from 'react'
import TypeInterface from '../model/typeInterface'
import Form from './Form'

const TodoList = () => {
  const [todos, setTodos] = useState<TypeInterface[]>([])

  return (
    <div>
      <Form setTodos={setTodos} todos={todos}/>
      <h1>todo list</h1>
    </div>
  )
}

export default TodoList
