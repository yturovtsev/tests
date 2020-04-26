import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TodoInput } from '../../components/TodoInput';
import { TodoList, TodoType } from '../../components/TodoList';
import { AppState } from './store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from './store/types';
import * as TodoActions from './store/actions';

type ReduxThunkPropsType = {} & LinkStateToProps & LinkDispatchToProps;

const ReduxThunk = ({
  todos,
  addTodo,
  deleteTodo,
  toggleCheckBox,
}: ReduxThunkPropsType) => {
  return (
    <div className="App">
      <h1>Redux-thunk</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        onDelete={deleteTodo}
        onCheckBoxToggle={toggleCheckBox}
        todos={todos}
      />
    </div>
  );
};

interface LinkStateToProps {
  todos: TodoType[];
}
interface LinkDispatchToProps {
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  toggleCheckBox: (id: string, todos: TodoType[]) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  todos: state.todos.todos,
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  ...bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);
