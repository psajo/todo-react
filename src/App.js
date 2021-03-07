import { createContext, useEffect, useReducer, useState } from "react";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import TodoSearch from "./component/TodoSearch";
import TodoTotal from './component/TodoTotal';

const TodoContext = createContext('??');
let id=0;

function App() {
  const [todoList, dispatch] = useReducer(reducer, [{
      id: id++,
      checked: false,
      text:'123'
    },
    {
      id: id++,
      checked: true,
      text:'456'
    },
  ]);
  // const [todoList, setTodoList ] =useState([]); //할일 목록
  console.log('todoList 크기 : '+todoList.length);
  
  return (
    <>
      <TodoContext.Provider value={[todoList, dispatch]}>
        <TodoTotal todoList={todoList}/>
        <TodoSearch/>
        <TodoAdd/>
        <TodoList/>
      </TodoContext.Provider>
    </>
  );
}

function reducer(state, action) {
  switch(action.type) {
    case 'ADD' :
      return [
        ...state,
        {
          id: action.id,
          checked : false,
          text: action.text
        }
      ];
    case 'UPDATE':
      const rest = state.filter(item=>(item.id!==action.id));
      return [...rest,{id:action.id, text:action.text,checked:action.checked}];
    case 'DELETE':
      return [];
  }
}


export {App,TodoContext};
