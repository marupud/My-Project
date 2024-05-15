import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/counter.actions';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from "@angular/common";
import { AppState } from '../app.state';
import { Todo } from '../models/todo.model';
import { addTodo, removeTodo, toggleTodo } from '../actions/todo.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  template: `<h1>Counter</h1>
  <div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  </div>
  <div>
    <p>Current Count: {{ count$ | async }}</p>
  </div>
  <div>
  <h1>Todos</h1>
    <input type="text" [(ngModel)]="newTodoText">
    <button (click)="addTodo()">Add Todo</button>
    <ul>
      <li *ngFor="let todo of todos$ | async" [style.textDecoration]="todo.completed ? 'line-through' : 'none'">
        <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo.id)">
        {{ todo.text }}
        <button (click)="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
</div>`,
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<number>;
  todos$: Observable<Todo[]>;
  newTodoText: string = '';

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select(state => state.counter)); // Use a selector function to select the 'counter' slice of state
    this.todos$ = this.store.pipe(select(state => state.todo.todos));
    this.count$.subscribe(count => console.log("Current Count:", count));
  }

  increment() {
    this.store.dispatch(increment());
    this.count$.subscribe(count => console.log("At Increment: " + count));
  }

  decrement() {
    this.store.dispatch(decrement());
    this.count$.subscribe(count => console.log("At Decrement: " + count));
  }

  reset() {
    this.store.dispatch(reset());
    this.count$.subscribe(count => console.log("At Reset: " + count));
  }

  addTodo() {
    const newTodo: Todo = {
      id: new Date().getTime(),
      text: this.newTodoText,
      completed: false
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
    this.newTodoText = '';
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

}
