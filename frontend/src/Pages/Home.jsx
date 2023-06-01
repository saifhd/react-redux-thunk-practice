import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Paginator from '../Components/Paginator';
import TodoList from '../Components/TodoList';
import { todosAction } from '../Features/Todo/TodoSlice';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const todosList = todos?.data
  const todosMeta = todos?.meta;

  const location = useLocation();
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    dispatch(todosAction({page}));
  },[page])

  return (
    <>
      {
        todosList?.map(todo => {
          return (
            <TodoList key={todo.id} todo={todo}></TodoList>
          )
        })
      }
      <Paginator metaData={todosMeta} />
      
    </>
    

  )
}

export default Home