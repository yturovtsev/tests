import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodos } from './api';
import { ActionType } from './store/types';

function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchTodos);

    yield put({
      type: ActionType.SET_FETCHED_TODOS,
      payload: {
        todos,
      },
    });
  } catch (e) {
    yield put({ type: ActionType.TODOS_FETCH_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(ActionType.TODOS_FETCH_REQUESTED, fetchTodosSaga);
}

export default mySaga;
