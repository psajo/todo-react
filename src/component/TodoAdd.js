import PropTypes from 'prop-types';
import { useState } from 'react';

TodoAdd.prototype = {
    dispatch : PropTypes.func,
    text : PropTypes.string,
    regex : PropTypes.string,
};

export default function TodoAdd({dispatch}) {
    const [{text,regex}, setValue] = useState({text:'',regex:''});
    // /[^0-9]/g
    return (
        <div>
            <input value={text} onChange={(e)=>{
                e.target.value = e.target.value.replace(regex, '');
                setValue({text:e.target.value, regex:regex});
            }} placeholder='추가할 내용을 입력하세요'/>
            <select onChange={(e)=>{
                let reg = '';
                if (e.target.value==='숫자') {
                    reg = /[^0-9]/g;
                }else if(e.target.value==='문자') {
                    reg = /[0-9]/g;
                }
                setValue({text:text.replace(reg,''),regex:reg});
            }}>
                <option value='전체'>전체</option>
                <option value='숫자'>숫자</option>
                <option value='문자'>문자</option>
            </select>
            <button onClick={()=>{
                dispatch({type:'ADD', text:text})
                setValue({text:''});
            }}>추가</button>
        </div>
    );
}
