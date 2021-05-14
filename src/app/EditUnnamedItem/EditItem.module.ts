import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditUnnamedItemComponent } from '.EditableList/EditUnnamedItem.component';

import { UnnamedRoutingModule } from './EditUnnamedItem-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UnnamedRoutingModule
  ],
  declarations: [
    EditUnnamedItemComponent,
    
  ]
})
export class UnnamedModule {}