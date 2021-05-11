/* 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUnnamedComponent } from './EditUnnamedComponent/EditUnnamedComponent.component';
import { EditDetailComponent } from './Edit-detail/Edit-detail.component';

const UnnamedRoutes: Routes = [
  { path: 'Unnamed', redirectTo: '/superUnnamed' },
  { path: 'Edit/:id', redirectTo: '/superEdit/:id' },
  { path: 'superUnnamed',  component: EditUnnamedComponent, data: { animation: 'Unnamed' } },
  { path: 'superEdit/:id', component: EditDetailComponent, data: { animation: 'Edit' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(UnnamedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UnnamedRoutingModule { }