import PropTypes from 'prop-types';
import TodoTotal from './TodoTotal';
import {TodoContext} from '../App';

export default function TodoList() {
    return (
        <table>
            <tbody>
                <tr><td>
                    <input type='checkbox'/>할일<button>수정</button><button>삭제</button>
                </td></tr>
            {/* <TodoContext.Consumer>
                {dispatch => console.log('test '+ dispatch({type:'SHOW'}) ) }
            </TodoContext.Consumer> */}
            </tbody>
        </table>
    );
}
