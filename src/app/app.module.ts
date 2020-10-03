import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { KeyComponent } from './key/key.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ChordComponent } from './chord/chord.component';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoopComponent } from './loop/loop.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyComponent,
    ChordComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
