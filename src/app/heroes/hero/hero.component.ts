import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string='ironman';
    public age:  number=45;

    get capitalizedName(): string{
       //return 'Hola mundo mundial'.toUpperCase();
       return this.name.toUpperCase();
    }

    getHeroDescription(): string{

       return `${this.name} - ${this.age}`;
    }

    changeHero():void{
     // throw 'Método no imp,ementado';
      this.name='Mazinger Z';

    }

    changeAge():void{
         this.age=48;
    }

     resetForm():void{
       this.name="ironman";
       this.age=45;
       //document.querySelector('h1')!.innerHTML='<h1>Desde Angular';

      // La siguiente instruccionesta fuera del ciclo de deteccion de angular
       //  document.querySelectorAll('h1')!.forEach=( element => {
      //  element.innerHTML='<h1>Desde Angular</h1>';
      // })

     }


}
