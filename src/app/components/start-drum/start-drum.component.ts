import { Component } from '@angular/core';

// Imports de entorno de desarrollo //
import { PACKS} from 'src/app/mocks/packs-mock';
import { LITERALS } from 'src/app/mocks/literals.mock';
import { Pack } from 'src/app/model/models.model';

@Component({
  selector: 'start-drum',
  templateUrl: './start-drum.component.html',
  styleUrls: ['./start-drum.component.css']
})
export class StartDrumComponent {
public title: string = 'Start Drum';
public literals = LITERALS;
public packs: Pack[] = PACKS;
public pack: Pack = this.packs[0];
public packId: string = `${this.packs[0].id}`;

  constructor(){}



}
