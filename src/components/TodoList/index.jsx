import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array, //phím tắt pta -> PropTypes.array,
    onTodoClick: PropTypes.func,
};
//xét giá trị mặc định là bao nhieu
TodoList.defaulProps = {
    todos: [],   //cha k truyền todo xuống lấy giá trị mặc định là []
    onTodoClick: null, //onTodoClick k đc truyền xuống lấy gía trị là null
};
function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList