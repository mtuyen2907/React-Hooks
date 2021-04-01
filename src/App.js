import React, { useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I luv Easy Frontend' },
    { id: 2, title: 'We luv Easy Frontend' },
    { id: 3, title: 'They luv Easy Frontend' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>

      <TodoList todos={todoList}
        onTodoClick={handleTodoClick} />

      <ColorBox />
    </div>
  );
}
export default App;
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