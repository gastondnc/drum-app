import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import de entorno de desarrollo //
import { AppComponent } from './app.component';
import { BtnsoundsComponent } from './components/btnsounds/btnsounds.component';
import { SongItemComponent } from './components/song-item/song-item.component';
import { StartDrumComponent } from './components/start-drum/start-drum.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Routes //
const route: Routes = [
  {
    path: '',
    component: StartDrumComponent
  },
  {
    path: 'drum/:id',
    component: BtnsoundsComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    BtnsoundsComponent,
    SongItemComponent,
    StartDrumComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

