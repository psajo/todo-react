import PropTypes from 'prop-types';

export default function TodoAdd() {
    
    return (
        <div>
            <input placeholder='추가할 내용을 입력하세요'/>
            <select>
                <option value='전체'>전체</option>
                <option value='숫자'>숫자</option>
                <option value='문자'>문자</option>
            </select>
            <button>추가</button>
        </div>
    );
}
