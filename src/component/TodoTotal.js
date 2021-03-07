import PropTypes from 'prop-types';

TodoTotal.propTypes = {
    todoList : PropTypes.array
};

export default function TodoTotal({todoList}) {
    const {totalSize, completeSize, restSize} = calculate(todoList);

    return (
        <div>
            {`전체 ${totalSize}, 완료 ${completeSize}, 미완료 ${restSize}`}
        </div>
    );
}

function calculate(todoList) {
    const totalSize = todoList.length;
    const completeSize = todoList.filter(item=>item.checked === true).length;
    const restSize = totalSize - completeSize;
    return {totalSize, completeSize, restSize};
}