import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EditUnnamedItemComponent } from './EditUnnamedItem/EditableList/EditableList.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './Page-Not-Found/Page-Not-Found.component';
import { SecondComponent } from './second/second.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'EditableList-component', component: EditUnnamedItemComponent},
  { path: '',   redirectTo: '/EditableList-component', pathMatch: 'full' },
  { path: '**', component:  PageNotFoundComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





