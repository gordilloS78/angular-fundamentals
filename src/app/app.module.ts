import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamiliaComponent } from './mi-familia/familia.component';





@NgModule({
  declarations: [
    AppComponent,
    FamiliaComponent
   
    
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
