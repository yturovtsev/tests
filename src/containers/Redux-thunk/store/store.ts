import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import { IInitialState, todoReducer } from './reducers';
import { AppActions } from './types';
import { localStorageMiddleware } from './localStorageMiddleware';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialTodos: IInitialState = JSON.parse(
  localStorage.getItem('todos-redux-thunk') || '[]'
);

const store = createStore(
  rootReducer,
  {
    todos: initialTodos,
  },
  applyMiddleware(
    thunk as ThunkMiddleware<AppState, AppActions>,
    logger,
    localStorageMiddleware
  )
);

export default store;
