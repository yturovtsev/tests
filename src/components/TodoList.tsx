import React from 'react';

export type TodoType = {
  id: string;
  name: string;
  isCompleted: boolean;
};
export type TodoListType = {
  todos: TodoType[];
  onDelete: (id: string) => void;
  onCheckBoxToggle: (id: string, todos: TodoType[]) => void;
};

export const TodoList = ({
  todos,
  onDelete,
  onCheckBoxToggle,
}: TodoListType) => {
  const handleDeleteTodo = (id: string) => onDelete(id);

  if (!todos.length) return null;

  return (
    <ul className="collection">
      {todos.map((el) => (
        <li key={el.id} className="collection-item todo-item">
          <label className="todo-item__name">
            <input
              type="checkbox"
              checked={el.isCompleted}
              onChange={onCheckBoxToggle.bind(null, el.id, todos)}
            />
            <span>{el.name}</span>
          </label>
          <button onClick={handleDeleteTodo.bind(null, el.id)}>
            <i className="material-icons">delete</i>
          </button>
        </li>
      ))}
    </ul>
  );
};
