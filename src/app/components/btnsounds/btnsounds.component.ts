import { Component } from '@angular/core';

// Imports de entorno de desarolo //
import { KEYSMOCK } from 'src/app/mocks/keysobj-mock';
import { Key } from 'src/app/model/models.model';

@Component({
  selector: 'btnsounds',
  templateUrl: './btnsounds.component.html',
  styleUrls: ['./btnsounds.component.css']
})
export class BtnsoundsComponent {
public keys: Key[] = KEYSMOCK;
public btnTile: string = 'Play Song';
private song: Key[] = [];
private songs: Key[][] = [];
public isRecording: boolean = false;
public isOptions: boolean = false;

  constructor(){
    document.body.onkeyup = (event) => {
      // console.log(event.keyCode)
      const keyCode = event.keyCode
      const keyObj = this.keys.find( (key: Key) => key.dataKey === keyCode.toString())
      if(keyObj !== undefined){
        this.playSound(keyObj)
        this.saveSound(keyObj)
      }
    }
  }

  playSound(key: Key) {
    // console.log('desde sound', key)
    const audio: HTMLAudioElement = document.getElementById(`${key.id}`) as HTMLAudioElement
    // console.log('Audio',audio)
    audio.currentTime = 0
    audio.play()
  }

  saveSound(keyObj: Key){
    // console.log('desde', keyObj)
    if(this.isRecording === true){
      this.song.push(keyObj)
      console.log('Sound guardado',this.song)

    }
  }

  playSong() {
    console.log('PLAY',this.song)
    this.song.forEach( (key,  index) => {
      setTimeout( () => {
        this.playSound(key)
      }, 250 * index)
    })
  }

  recSong(option: string) {
    this.isOptions = false;
    if(option === 'delete'){
      this.song = []
      console.log('desde delete',this.song)
    }else{
      if(this.song.length > 0) {
        this.songs.push(this.song)
        console.log('desde recording',this.song)
      }
      this.song = []
      console.log('recording en 0',this.songs)
    }
    this.startRec()
    console.log('Recording',this.isRecording)
  }

  openOptions() {
    this.isOptions= true
  }

  startRec(){
    this.isRecording = true
  }

  stopRec(){
    this.isRecording = false
  }

  // setStorage() {
  //   console.log('desde Storage');
  //   localStorage.setItem('key', 'value');
  // }

}




















