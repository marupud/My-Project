// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { AppComponent } from './app.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'NgRx', component: NgRxComponent },
    { path: 'store', component: MyCounterComponent },
    { path: 'input', component: ArrayMethodsComponent },
    { path: 'pipes', component: PipesExamplesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }