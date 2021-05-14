import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { PageNotFoundComponent } from './Page-Not-Found/Page-Not-Found.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, FirstComponent, SecondComponent, 
  , PageNotFoundComponent],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }