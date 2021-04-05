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
 /** Bài tập 2: TodoList - list and remove
* 1. Render danh sách todos với dữ liệu đc truyền từ component cha
* 2. Khi click lên 1 item thì remove item đó khỏi danh sách
*
* PHÂN TÍCH
* App
*   - Props: N/A
*   - State: todoList
*   - Handler: handleTodoCLick - Remove todo ra khỏi state todoList
*   - Render: <TodoList todos={todoList}
*               onTodoClick={handleTodoClick} />
*  TodoList
*  - Props:
*    + todos: danh sách todos
*    + onTodoClick: hàm sẽ đc gọi khi một todo đc click
*  - State: N/A
*  - Render: ul> li> todo.title
*  - Handle todo onClick: gọi hàm props.onnTodoClick()
*/