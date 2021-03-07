import PropTypes from 'prop-types';
import { useState } from 'react';
import {StyledButton} from '../App';

TodoSearch.prototype = {
    dispatch: PropTypes.func,
    text : PropTypes.string
};

export default function TodoSearch({dispatch}) {
    const [{text}, setText] = useState({text:''});
    return (
        <div>
            <input value={text} placeholder='검색하세요' onChange={(e) => {setText({text:e.target.value})}}/>
            <StyledButton onClick={()=>{
                dispatch({type:'SEARCH', text:text});
            }}>검색</StyledButton>
        </div>
    );
}



