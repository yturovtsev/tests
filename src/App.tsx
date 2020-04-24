import React, { useState, useEffect } from 'react';
import { TodoList, TodoType } from './TodoList';
import { TodoInput } from './TodoInput';
import './app.css';

function App() {
  const { todos, setTodos, handleAddTodo, handleDeleteTodo, handleCheckBoxToggle } = useAppLogic();


  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'));
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        onCheckBoxToggle={handleCheckBoxToggle}
        onDelete={handleDeleteTodo}
        todos={todos}
      />
    </div>
  );
}

const useAppLogic = () => {
  const [ todos, setTodos ] = useState<TodoType[] | []>([]);
  const handleAddTodo = (todo: TodoType) => {
    setTodos([ ...todos, todo ]);
  };
  const handleDeleteTodo = (id: string) => {
    setTodos([ ...todos.filter(el => el.id !== id) ]);
  };
  const handleCheckBoxToggle = (id :string) => {
    const copyTodos = [ ...todos ];
    const todoIdx = copyTodos.findIndex(el => el.id === id);

    copyTodos[todoIdx].isCompleted = !copyTodos[todoIdx].isCompleted;
    setTodos(copyTodos);
  }

  return { todos, setTodos, handleAddTodo, handleDeleteTodo, handleCheckBoxToggle };
}

export default App;
