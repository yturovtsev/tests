import { TodoType } from '../../../components/TodoList';
import { ActionType, FetchedTodoType, TodoActionsType } from './types';

const { ADD_NEW_TODO, DELETE_TODO, SET_TODOS, SET_FETCHED_TODOS } = ActionType;

export interface IInitialState {
  todos: TodoType[];
  fetchedTodos: FetchedTodoType[];
}

export const initialState: IInitialState = {
  todos: [],
  fetchedTodos: [],
};

export const todoReducer = (state = initialState, action: TodoActionsType) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case SET_FETCHED_TODOS:
      return {
        ...state,
        fetchedTodos: action.payload.todos,
      };
    default:
      return state;
  }
};
