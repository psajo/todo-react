import { createContext, useEffect, useReducer, useState } from "react";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import TodoSearch from "./component/TodoSearch";
import TodoTotal from './component/TodoTotal';
import PropTypes from 'prop-types';

App.prototype = { 
  id : PropTypes.number,
  checked: PropTypes.bool,
  text: PropTypes.string,
  dispatch: PropTypes.func,
};

const TodoContext = createContext('??');
let id=0;  
JSON.parse(localStorage.getItem('todoList')).map(todo=>{
  if(todo.id>id) {
    id = todo.id;
  }
});

function App() {
  console.log('id '+ id);
  const [todoList, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todoList')));
  
  return (
    <>
      <TodoContext.Provider value={[todoList, dispatch]}>
        <TodoTotal todoList={todoList}/>
        <TodoSearch dispatch={dispatch}/>
        <TodoAdd dispatch={dispatch}/>
        <TodoList/>
      </TodoContext.Provider>
    </>
  );
}

function reducer(state, action) {
  let items=[];
  switch(action.type) {
    case 'ADD' :
      items = [
        {
          id: id++,
          checked : false,
          text: action.text
        },
        ...state
      ];
      localStorage.setItem('todoList',JSON.stringify(items));
      return items;

    case 'UPDATE':
      items = state.map(todo=>{
        if(todo.id === action.id) {
          return {id: action.id, text: action.text, checked: action.checked};
        }
        return todo;
      });
      localStorage.setItem('todoList',JSON.stringify(items));
      return items;
      
    case 'DELETE':
      items = state.filter(todo=>todo.id!==action.id);
      localStorage.setItem('todoList',JSON.stringify(items));
      return items;

    case 'SEARCH':
      if(action.text ==='') {
        items = JSON.parse(localStorage.getItem('todoList'));
      }else {
        items = state.filter(item=>item.text.indexOf(action.text)!== -1);
      }
      return items;
  }
}

export {App,TodoContext};
