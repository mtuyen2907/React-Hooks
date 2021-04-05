import React, { useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I luv Easy Frontend' },
    { id: 2, title: 'We luv Easy Frontend' },
    { id: 3, title: 'They luv Easy Frontend' },
  ]);

  //Todo List
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  //Todo Form
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);

    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>WELLCOME</h1>
      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList}
        onTodoClick={handleTodoClick} />

      <ColorBox />
    </div>

  );
}
export default App;
