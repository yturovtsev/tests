import { TodoType } from '../../../components/TodoList';

export enum ActionType {
  ADD_NEW_TODO = 'ADD_NEW_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SET_TODOS = 'SET_TODOS',
  TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX',
}

export interface IAddTodo {
  type: typeof ActionType.ADD_NEW_TODO;
  payload: {
    todo: TodoType;
  };
}

export interface IDeleteTodo {
  type: typeof ActionType.DELETE_TODO;
  payload: {
    id: string;
  };
}

export interface ISetTodos {
  type: typeof ActionType.SET_TODOS;
  payload: {
    todos: TodoType[];
  };
}

export interface IToggleCheckBox {
  type: typeof ActionType.TOGGLE_CHECKBOX;
  payload: {
    todos: TodoType[];
  };
}

export type TodoActionsType =
  | IAddTodo
  | IDeleteTodo
  | ISetTodos
  | IToggleCheckBox;

export type AppActions = TodoActionsType;
