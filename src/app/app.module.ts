import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NumberOnlyDirective } from './number-only.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    NumberOnlyDirective
   
  ],
  imports: [
    CommonModule ,
    BrowserModule
  ],
  providers:[
  
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
