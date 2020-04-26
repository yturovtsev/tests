import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { ActionType, AppActions } from './types';

export const localStorageMiddleware: Middleware<Dispatch> = ({
  getState,
}: MiddlewareAPI) => (next) => (action: AnyAction | AppActions) => {
  const result = next(action);

  if (
    action.type === ActionType.SET_TODOS ||
    action.type === ActionType.ADD_NEW_TODO ||
    action.type === ActionType.DELETE_TODO
  ) {
    localStorage.setItem('todos-redux-thunk', JSON.stringify(getState().todos));
  }

  return result;
};
