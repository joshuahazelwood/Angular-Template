import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EditUnnamedItemComponent } from './EditUnnamedItem/EditUnnamedItem.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './Page-Not-Found/Page-Not-Found.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'EditUnnamedItem-component', component: EditUnnamedItemComponent},
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component:  PageNotFoundComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





