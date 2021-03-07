import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TodoAdd() {
    const [value, setValue] = useState({text:''});
    return (
        <div>
            <input value={value.text} onChange={(e)=>{setValue({text:e.target.value})}} placeholder='추가할 내용을 입력하세요'/>
            <select>
                <option value='전체'>전체</option>
                <option value='숫자'>숫자</option>
                <option value='문자'>문자</option>
            </select>
            <button onClick={()=>{console.log(value.text)}}>추가</button>
        </div>
    );
}
