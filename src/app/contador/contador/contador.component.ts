/*2.- Ahora ocuparemos un decorador, para transformar
esta clase en un componente propio de Angular */

import { Component } from '@angular/core';



/*3.- Aplicamos el decorador */

@Component({
    selector: 'app-contador',//Seria el nombre del componente
    template: `
        <!-- Aca iria todo lo que hicimos de HTML en el
    app.component.html, a esto se le llama Template -->
        <h1>{{title}}</h1>
        <h2>{{contadorBasico}}</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base);">+ {{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base);">- {{base}}</button>
    `
})

/*1.-  Se crea una clase para hacer la lógica, y se exporta 
por que necesitamos utilizarla en diferentes lugares*/
export class ContadorComponent {
    title: string = 'Primeras pruebas con Angular';
    contadorBasico: string = 'Contador básico en Angular';
    numero: number =10;
 
    base: number = 5;
  
  
    acumular(valor: number){
        this.numero += valor; 
    }
}