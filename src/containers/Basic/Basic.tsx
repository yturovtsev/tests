import React, { useEffect, useState } from "react";
import { TodoInput } from "../../components/TodoInput";
import { TodoList, TodoType } from "../../components/TodoList";

export const Basic = () => {
  const {
    todos,
    setTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleCheckBoxToggle,
  } = useAppLogic();

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos-basic") || "[]"));
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("todos-basic", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Basic</h1>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        onCheckBoxToggle={handleCheckBoxToggle}
        onDelete={handleDeleteTodo}
        todos={todos}
      />
    </div>
  );
};

const useAppLogic = () => {
  const [todos, setTodos] = useState<TodoType[] | []>([]);
  const handleAddTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };
  const handleDeleteTodo = (id: string) => {
    setTodos([...todos.filter((el) => el.id !== id)]);
  };
  const handleCheckBoxToggle = (id: string) => {
    const copyTodos = [...todos];
    const todoIdx = copyTodos.findIndex((el) => el.id === id);

    copyTodos[todoIdx].isCompleted = !copyTodos[todoIdx].isCompleted;
    setTodos(copyTodos);
  };

  return {
    todos,
    setTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleCheckBoxToggle,
  };
};
