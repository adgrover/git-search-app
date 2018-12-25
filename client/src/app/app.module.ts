import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MainService } from "./services/main.service";
import { RequestDispatcher } from "./services/request-dispatcher.service";

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    MainService,
    RequestDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
