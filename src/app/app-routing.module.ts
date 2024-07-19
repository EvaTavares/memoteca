import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/pensamentos/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/pensamentos/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/pensamentos/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/pensamentos/update-thought/update-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThoughtComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thoughts/updateThought/:id',
    component: UpdateThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
