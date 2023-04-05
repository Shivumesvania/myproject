import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShivuComponent } from './shivu/shivu.component';
import { AasthaComponent } from './aastha/aastha.component';
import { JanuComponent } from './janu/janu.component';

@NgModule({
  declarations: [
    AppComponent,
    ShivuComponent,
    AasthaComponent,
    JanuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
