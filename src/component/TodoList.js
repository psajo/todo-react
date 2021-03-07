import PropTypes from 'prop-types';
import TodoTotal from './TodoTotal';
import {TodoContext} from '../App';
import { useState } from 'react';

export default function TodoList() {
    const [{toggle},setToggle] = useState({toggle:false})
    
    return (
        <table>
            <tbody>
            <TodoContext.Consumer>
                {([todoList,dispatch]) => todoList.map(item=>(
                    <tr key={item.id}>
                        <td>
                            <input type='checkbox' onChange={(e)=>{
                            dispatch({type:'UPDATE', id:item.id,checked:!item.checked,text:item.text})
                            }} checked={item.checked}/>
                        </td>
                        <td>
                            {!toggle &&item.text}
                            {toggle && <input type='text' value={item.text} onChange={()=>{}}/>}
                        </td>
                        <td><button onClick={()=>{setToggle({toggle:!toggle})}}>{toggle?'수정':'적용'}</button></td>
                        <td><button onClick={()=>{}}>삭제</button></td>
                    </tr>
                )) }
            </TodoContext.Consumer>
            </tbody>
        </table>
    );
}
