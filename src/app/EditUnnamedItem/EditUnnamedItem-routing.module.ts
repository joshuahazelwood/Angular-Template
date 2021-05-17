
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUnnamedItemComponent } from './EditableList/EditableList.component';


const UnnamedRoutes: Routes = [
  { path: 'Unnamed', redirectTo: '/EditUnnamed' },
  { path: 'unnamed/:price', redirectTo: '/EditUnnamed/:price' },
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