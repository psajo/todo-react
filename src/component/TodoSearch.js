import PropTypes from 'prop-types';
import { useState } from 'react';

TodoSearch.prototype = {
    dispatch: PropTypes.func,
    text : PropTypes.string
};

export default function TodoSearch({dispatch}) {
    const [{text}, setText] = useState({text:''});
    return (
        <div>
            <input value={text} placeholder='검색하세요' onChange={(e) => {setText({text:e.target.value})}}/>
            <button onClick={()=>{
                dispatch({type:'SEARCH', text:text});
            }}>검색</button>
        </div>
    );
}
