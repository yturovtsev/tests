import { TodoType } from '../../../components/TodoList';
import { ActionType, AppActions } from './types';
import { Dispatch } from 'redux';

export const addTodo = (todo: TodoType): AppActions => ({
  type: ActionType.ADD_NEW_TODO,
  payload: { todo },
});

export const deleteTodo = (id: string): AppActions => ({
  type: ActionType.DELETE_TODO,
  payload: { id },
});

export const setTodos = (todos: TodoType[]): AppActions => ({
  type: ActionType.SET_TODOS,
  payload: { todos },
});

export const toggleCheckBox = (id: string, todos: TodoType[]) => (
  dispatch: Dispatch<AppActions>
) => {
  const copyTodos = [...todos];
  const todoIdx = copyTodos.findIndex((el) => el.id === id);

  copyTodos[todoIdx].isCompleted = !copyTodos[todoIdx].isCompleted;

  dispatch({
    type: ActionType.SET_TODOS,
    payload: { todos: copyTodos },
  });
};
