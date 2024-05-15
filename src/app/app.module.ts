import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { todoReducer } from './reducers/todo.reducer';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AuthModule.forRoot(environment.auth),
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({
      counter: counterReducer,
      todo: todoReducer
    }),
    RouterModule,
  ],
  exports: [MatPaginator, MatTableModule, MatPaginatorModule, RouterModule],
  providers: [UserService, LoginService,]
})
export class AppModule {
}
