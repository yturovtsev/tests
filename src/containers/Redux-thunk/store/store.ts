import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import mySaga from '../sagas';
import { IInitialState, todoReducer } from './reducers';
import { AppActions } from './types';
import { localStorageMiddleware } from './localStorageMiddleware';

const rootReducer = combineReducers({
  todos: todoReducer,
});
const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;

const initialTodos: IInitialState = JSON.parse(
  localStorage.getItem('todos-redux-thunk') ||
    '{"todos": [], "fetchedTodos": []}'
);

const store = createStore(
  rootReducer,
  {
    todos: initialTodos,
  },
  applyMiddleware(
    thunk as ThunkMiddleware<AppState, AppActions>,
    logger,
    localStorageMiddleware,
    sagaMiddleware
  )
);

sagaMiddleware.run(mySaga);

export default store;
