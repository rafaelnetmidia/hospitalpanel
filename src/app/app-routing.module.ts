import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, 
    children: [
      {path: 'home',  component: HomeComponent},
      {path: 'funcionarios', component: FuncionarioListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
