
/*1.- Creamos la clase, y la exportamos */

import { Component } from "@angular/core";

/*2.- Importamos nuestro decorador, lo podemos hacer, poniendo el nombre
y al presionar tab, Angular ya lo hará automáticamente*/

@Component({
    /**3.- Asignamos el nombre del app e indicamos el template */
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'SuperMan';
    edad: number= 45

    /**Creando una propiedad con getter (no es un método por eso al
     * llamarlo no se pondran los paréntesis) */
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    /**Creamos un método para cambiar el nombre del heroe */
    cambiarNombre(): void{
        this.nombre= 'SpiderMan';
    }

    cambiarEdad(): void{
        this.edad=30;
    }

}

/**5.- Recuerden que debemos agregar o importar el componente 
 * a un módulo y el único que hay por el momento es app.module.ts
 * 
 */