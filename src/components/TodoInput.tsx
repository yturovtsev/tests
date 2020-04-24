import React, {useState, useRef, useEffect} from 'react';
import {v4} from 'uuid';
import {TodoType} from './TodoList';

type TodoInputType = {
  onAdd: (todo: TodoType) => void
}

export const TodoInput = ({onAdd}: TodoInputType) => {
  const [, setValue] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);
  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    ref.current && setValue(ref.current.value);

    if (e.key === 'Enter' && ref.current) {
      onAdd({
        id: v4(),
        name: ref.current.value,
        isCompleted: false
      });
      ref.current.value = '';
    }
  };
  const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => e.preventDefault();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="col s12"
    >
      <div className="row">
        <div className="input-field col s6">
          <input
            onKeyUp={handleInputChange}
            placeholder="Todo Name"
            id="todo_name"
            type="text"
            className="validate"
            ref={ref}
          />
          <label htmlFor="todo_name">Todo Name</label>
        </div>
      </div>
    </form>
  );
};
