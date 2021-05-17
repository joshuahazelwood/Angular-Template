import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { PageNotFoundComponent } from './Page-Not-Found/Page-Not-Found.component';

import { UnnamedModule } from './EditUnnamedItem/EditItem.module';

import { Router } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, UnnamedModule ],
  declarations: [ AppComponent, FirstComponent, SecondComponent, PageNotFoundComponent],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}