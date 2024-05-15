import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as TodoActions from '../actions/todo.actions';

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: []
};

const _todoReducer = createReducer(
    initialState,
    on(TodoActions.addTodo, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),
    on(TodoActions.toggleTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })),
    on(TodoActions.removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }))
);

export function todoReducer(state: TodoState | undefined, action: any) {
    return _todoReducer(state, action);
}
