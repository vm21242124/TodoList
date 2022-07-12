import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>todos list</h3>
      {props.todos.map((todos)=>{
        return <TodoItem todos={todos} key={todos.sno} onDelete={(props.onDelete)}/>
      })}

      
    </div>
  )
}
