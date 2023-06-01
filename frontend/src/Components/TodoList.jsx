import React from 'react'

function TodoList({todo}) {
  const {name, description} = todo;
  return (
    <div 
        class=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        key={todo.id}  
    >
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ todo.name }</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ todo.description }</p>
        <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" >Delete</button>
    </div> 
  )
}

export default TodoList

