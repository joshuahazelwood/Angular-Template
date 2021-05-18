
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUnnamedItemComponent } from './EditableList/EditableList.component';


const UnnamedRoutes: Routes = [
  { path: 'Unnamed', redirectTo: '/EditUnnamed' },
  { path: 'unnamed/:element2', redirectTo: '/EditUnnamed/:element2' },
  { path: 'EditUnnamed',  component: EditUnnamedItemComponent, data: { animation: 'Unnamed' } },
 
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