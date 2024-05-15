import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscription, delay, of } from 'rxjs';

@Component({
  selector: 'app-pipes-examples',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `<div><div style="color:red"><p>This is the Data without using Async Pipe</p>{{ data }}</div>
  <div style="color:green"><p>This is the Data with using Async Pipe</p>{{ dataa$ | async }}</div></div>`,
  styleUrl: './pipes-examples.component.scss'
})
export class PipesExamplesComponent {

  dataa$: Observable<number> | undefined;
  data: number | undefined;
  dataSubscription: Subscription;

  constructor() {

    this.dataa$ = of(42).pipe(delay(2000));

    // Simulating an async operation that emits data after 2 seconds
    const data$ = of(42).pipe(delay(2000));

    // Manually subscribing to the observable
    this.dataSubscription = data$.subscribe(value => {
      this.data = value;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to avoid memory leaks
    this.dataSubscription.unsubscribe();
  }

}