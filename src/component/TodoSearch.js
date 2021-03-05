import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TodoSearch() {
    const [state, setState] = useState({text:''});
    return (
        <div>
            <input value={state.text} placeholder='검색하세요' onChange={(e) => {setState({text:e.target.value})}}/>
            <button onClick={()=>{
                console.log(state.text);
            }}>검색</button>
        </div>
    );
}
