import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ArrayMethodsComponent } from '../array-methods/array-methods.component';
import { NgRxComponent } from '../ng-rx/ng-rx.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from '../my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, ArrayMethodsComponent, NgRxComponent, TableComponent, CommonModule, MyCounterComponent, StoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ShowTable: boolean = false;

  showTable(): void {
    this.ShowTable = !this.ShowTable; // Toggle the value of showTable
  }



}
