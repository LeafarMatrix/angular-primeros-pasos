
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../servicios/dbz.service';
import { Character } from '../interfaces/character.interface';

  // Este es el Componente Padre

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

/*export class MainPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  */

export class MainPageComponent  {

constructor( private dbzService: DbzService){}

  get characters(): Character[]{
       return [...this.dbzService.Characteres];
  }


   onDeleteCharacter( id: string): void {
     this.dbzService.deleteCharacterByID(id);
   }

   onNewCharacter ( characters: Character):void {
        this.dbzService.addCharacter( characters);
   }

}
