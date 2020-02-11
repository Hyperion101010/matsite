import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { materialdemo } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlParserComponent } from './url-parser/url-parser.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UrlParserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialdemo,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
