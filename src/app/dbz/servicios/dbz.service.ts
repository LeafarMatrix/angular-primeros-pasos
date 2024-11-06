import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from   'uuid';

console.log(uuid());

@Injectable({
      providedIn: 'root'
    })

export class DbzService {
  [x: string]: any;

  public Characteres: Character[]=[{
    id: uuid(),
    name: 'Krillin',
    power: 1000
 },{
  id: uuid(),
    name: 'Goku',
    power: 9500
 },{
   id: uuid(),
   name: 'Mazinger Z',
   power: 12500
 },
   {
   id: uuid(),
   name: 'Afrodita',
   power: 7500
}];

 addCharacter( character: Character ):void{
   //console.log('MainPage');
   //console.log({character});

  /*  Sin destructuracion

     const newCharacter: Character={
     id: uuid(),
     name:character.name,
     power:character.power
   }
*/
  /// Aplica destructuracion
 //  const newCharacter: Character={  ...character, id: uuid()};

 // pero  para este caso dejamos el id primero
 const newCharacter: Character={id: uuid(),  ...character };
 this.Characteres.push(newCharacter);

}

/*onDeleteCharacter(index:number){
   this.Characteres.splice(index,1);
}
  */

deleteCharacterByID(id:string){
  this.Characteres=this.Characteres.filter( character=> character.id !==id);
}



}
