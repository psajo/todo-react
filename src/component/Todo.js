import PropTypes from 'prop-types';
import { useState } from 'react';
import {StyledButton} from '../App';

Todo.prototype = {
    id : PropTypes.number,
    checked : PropTypes.bool,
    text : PropTypes.string,
    dispatch : PropTypes.func
};

export default function Todo({id,checked,text,dispatch}) {
    const [{toggle},setToggle] = useState({toggle:false});
    const [values, setValues] = useState({id:id, checked:checked, text:text});
    return (
        <tr>
            <td>
                <input type='checkbox' 
                    onChange={(e)=>{ setValues({id:values.id, checked:!values.checked, text:values.text});}} 
                    checked={values.checked} disabled={!toggle}/>
            </td>
            <td width={180}>
                {!toggle &&values.text}
                {toggle && 
                    <input type='text' value={values.text} 
                        onChange={(e)=>setValues({id:values.id, checked:values.checked, text:e.target.value})}/>
                }
            </td>
            <td><StyledButton background={'#22741C'} onClick={()=>{ 
                setToggle({toggle:!toggle});
                if(toggle) {
                    dispatch({type:'UPDATE',id:values.id, checked:values.checked, text:values.text})
                }
            }}>{toggle?'적용':'수정'}</StyledButton></td>
            <td><StyledButton background='red' onClick={()=>{
                dispatch({type:'DELETE',id:values.id})
            }}>삭제</StyledButton></td>
        </tr>
    );
}
