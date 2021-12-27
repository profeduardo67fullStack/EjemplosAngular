import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  /*styleUrls: ['./listado.component.css'], para agregar los estilos
  a este componente*/
})

/**Automáticamente implementa el OnInit, que es el primer ciclo
 * de vida que se ve en Angular, necesita el ngOneInit()
 */
export class ListadoComponent {
  heroes: string[] = ['Super Man','Spider Man','Acuaman', 'Batman'];
  heroeBorrado: string = '';
  cantidadDeElementos=4;


  /**Método para borrar un heroe */

  borrarHeroe(){
   this.cantidadDeElementos -= this.cantidadDeElementos; 
   this.heroeBorrado = this.heroes.pop() || '';
  }
  
}
