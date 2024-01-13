
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Imports de entorno de desarolo //
import { KEYS_MOCK } from 'src/app/mocks/keysobj-mock';
import { LITERALS } from 'src/app/mocks/literals.mock';
import { PACKS } from 'src/app/mocks/packs-mock';
import { Key, Pack } from 'src/app/model/models.model';


@Component({
  selector: 'btnsounds',
  templateUrl: './btnsounds.component.html',
  styleUrls: ['./btnsounds.component.css']
})
export class BtnsoundsComponent {
  public keys: Key[] = KEYS_MOCK;
  public packs: Pack[] = PACKS;
  public packName: string = '';
  public literals: any = LITERALS;
  private packId: number = 0;
  private song: Key[] = [];
  public songs: Key[][] = this.getStorage();
  private audio: HTMLAudioElement | null = null;
  private interval: any = undefined;
  public rate: number = 500;
  private rateVel: number = 50;
  public slowLimit: number = 900;
  public fastLimit: number = 100;
  public indexSongPlaying: number = 0;
  private indexSoundPlaying: number = 0;
  public isRecording: boolean = false;
  public isPlaying: boolean = false;

  constructor( private route: ActivatedRoute  ) {
    this.route.params.subscribe( param => {
      this.packId = Number(param['id']);
      this.setKeys()
      this.packName = this.getPackName(this.packId);
    } )

    this.getStorage();
    this.setListener();
  }

  setListener() {
    document.body.onkeyup = (event) => {
      const keyCode = event.keyCode
      const keyObj = this.keys.find((key: Key) => key.dataKey === keyCode.toString())
      if (keyObj !== undefined) {
        this.playSound(keyObj)
        this.saveSound(keyObj)
        this.classHandler(keyObj.dataKey)
      }
    }
  }

  classHandler(dataKey: string) {
    const buttonEl: HTMLDivElement = document.getElementById(dataKey) as HTMLDivElement
    buttonEl.classList.add('active')
    buttonEl.addEventListener('transitionend', () => {
      buttonEl.classList.remove('active')
    })
  }

  playSound(key: Key) {
    // console.log('desde sound', key)
    this.audio = document.getElementById(`${key.id}`) as HTMLAudioElement
    this.audio.currentTime = 0
    this.audio.play()
  }

  saveSound(keyObj: Key) {
    if (this.isRecording === true) {
      this.song.push(keyObj)
    }
  }

  deleteSong(songParam: Key[]) {
    this.stopSong()
    this.songs = this.songs.filter(song => {
      return song !== songParam
    })
    this.setStorage()
  }

  playSong(index: number) {
    this.isPlaying = true
    this.indexSongPlaying = index;
    this.createInterval(0)
  }

  stopSong() {
    this.isPlaying = false
    clearInterval(this.interval)
  }

  startRec() {
    this.song = []
    this.isRecording = true
  }

  stopRec() {
    this.isRecording = false
    if (this.song.length > 0) {
      this.songs.push(this.song);
      this.setStorage()
    }
  }

  slowRate() {
    this.rate = this.rate + this.rateVel
    this.createInterval();
  }

  fastRate() {
    this.rate = this.rate - this.rateVel
    this.createInterval();
  }

  createInterval(indexSound?: number) {
    if (indexSound !== undefined) {
      this.indexSoundPlaying = indexSound;
    }
    if (this.interval !== undefined) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.playSound(this.songs[this.indexSongPlaying][this.indexSoundPlaying])
      if (this.indexSoundPlaying < this.songs[this.indexSongPlaying].length - 1) {
        this.indexSoundPlaying = this.indexSoundPlaying + 1
      } else {
        this.indexSoundPlaying = 0
      }
    }, this.rate)
  }


  setStorage() {
    localStorage.setItem('songs', JSON.stringify(this.songs));
  }

  getStorage(): Key[][] {
    const ls: string | null = localStorage.getItem('songs')
    return ls !== null ? JSON.parse(ls) : []
  }


  getPackName(packId: number): string {
    const pack =  this.packs.find( pack => pack.id === packId )
    return pack?.packName!
  }

  setKeys() {
    this.keys = this.keys.filter( key =>  key.packId === this.packId)
  }

}







































