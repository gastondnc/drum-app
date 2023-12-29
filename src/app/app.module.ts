import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnsoundsComponent } from './components/btnsounds/btnsounds.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnsoundsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
