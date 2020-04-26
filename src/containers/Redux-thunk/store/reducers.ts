import { TodoType } from '../../../components/TodoList';
import { ActionType, TodoActionsType } from './types';

const { ADD_NEW_TODO, DELETE_TODO, SET_TODOS } = ActionType;

export interface IInitialState {
  todos: TodoType[];
}

export const initialState: IInitialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action: TodoActionsType) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        todos: state.todos.concat(action.payload.todo),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case SET_TODOS:
      return {
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
