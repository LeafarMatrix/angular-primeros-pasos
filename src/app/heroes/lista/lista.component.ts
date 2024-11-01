import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

    public heroNames: string[]=['Mazinger Z','Ironman','Hulk','She Hulk','Thor','Spiderman','Superman'];
    public deletedHero?: string;

    removeLastHero():void{
     //const deletedHero=this.heroNames.pop()
       this.deletedHero=this.heroNames.pop();
       //console.log(this.deletedHero);
    }
}
