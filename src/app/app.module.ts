import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnsoundsComponent } from './components/btnsounds/btnsounds.component';
import { SongItemComponent } from './components/song-item/song-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnsoundsComponent,
    SongItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
