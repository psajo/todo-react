import Todo from './Todo';
import {TodoContext} from '../App';
import { useState } from 'react';

export default function TodoList() {
    return (
        <table>
            <tbody>
                <TodoContext.Consumer>
                    {([todoList,dispatch]) => todoList.map(item=>(
                        <Todo key={item.id} id={item.id} checked={item.checked} text={item.text} dispatch={dispatch}/>
                    )) }
                </TodoContext.Consumer>
            </tbody>
        </table>
    );
}

