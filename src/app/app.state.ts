import { TodoState } from "./reducers/todo.reducer";

// app.state.ts
export interface AppState {
    counter: number;
    todo: TodoState;
}
