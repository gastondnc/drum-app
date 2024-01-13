import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Key } from 'src/app/model/models.model';




@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input('song') song: Key[] = [];
  @Output('on-play') onPlayEmitter: EventEmitter<boolean> = new EventEmitter()
  @Output('on-delete') onDeleteEmitter: EventEmitter<boolean> = new EventEmitter()
  public songLabel: string = ''

  constructor(){}

  ngOnInit(): void {
    this.song.forEach( (sound: Key) => {
      this.songLabel = `${this.songLabel} ${sound.soundLabel}`
    } )
  }

  playHandler(){
    this.onPlayEmitter.emit(true)
  }

  deleteHandler() {
    this.onDeleteEmitter.emit(true)
  }


}
