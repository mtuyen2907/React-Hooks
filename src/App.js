import React, { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I luv Easy Frontend' },
    { id: 2, title: 'We luv Easy Frontend' },
    { id: 3, title: 'They luv Easy Frontend' },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }

    fetchPostList();
  }, []);  //mảng trống dependencies chạy đúng 1 lần
  useEffect(() => {
    console.log('TODO list effect');
  }); //không có dependencies luôn luôn chạy sau mỗi lần render

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
      <PostList posts={postList} />

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList}
        onTodoClick={handleTodoClick} />
      <ColorBox />
    </div>

  );
}

export default App;
