
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUnnamedComponent } from '.EditableList/EditUnnamedItem.component';


const UnnamedRoutes: Routes = [
  { path: 'Unnamed', redirectTo: '/superUnnamed' },
  { path: 'Edit/:id', redirectTo: '/superEdit/:id' },
  { path: 'Unnamed',  component: EditUnnamedComponent, data: { animation: 'Unnamed' } },
 
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