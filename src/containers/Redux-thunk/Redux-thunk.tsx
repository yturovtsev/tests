import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TodoInput } from '../../components/TodoInput';
import { TodoList, TodoType } from '../../components/TodoList';
import { AppState } from './store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions, FetchedTodoType } from './store/types';
import * as TodoActions from './store/actions';

type ReduxThunkPropsType = {} & LinkStateToProps & LinkDispatchToProps;

const ReduxThunk = ({
  todos,
  fetchedTodos,
  addTodo,
  deleteTodo,
  toggleCheckBox,
  fetchTodos,
}: ReduxThunkPropsType) => {
  const handleSagaRunner = () => fetchTodos();

  return (
    <div className="App">
      <h1>Redux-thunk</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        onDelete={deleteTodo}
        onCheckBoxToggle={toggleCheckBox}
        todos={todos}
      />
      <hr />
      <button onClick={handleSagaRunner}>Run saga for fetch todos</button>
      <ul>
        {!fetchedTodos.length && <li>no fetched todos</li>}
        {fetchedTodos.map((fetchedTodo) => (
          <li key={fetchedTodo.id}>
            {fetchedTodo.id} {fetchedTodo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface LinkStateToProps {
  todos: TodoType[];
  fetchedTodos: FetchedTodoType[];
}
interface LinkDispatchToProps {
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  toggleCheckBox: (id: string, todos: TodoType[]) => void;
  fetchTodos: () => void;
}

const mapStateToProps = ({ todos }: AppState): LinkStateToProps => ({
  todos: todos.todos,
  fetchedTodos: todos.fetchedTodos,
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  ...bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);
