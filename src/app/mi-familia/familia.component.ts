import { Component } from '@angular/core';


@Component({
    selector:'my-family',
    template:`
                <h2> Integrantes de {{nombre}} </h2
                 <ul>
                    <li>Primero el Amor de mi VIDA: {{esposa}}</li>
                 <ul>
                    <h3>Mis Hijos:</h3>
                    <li *ngFor= "let hijo of mis_hijos"> {{ hijo }} </li>
                </ul> 
    
                </ul> 
            `,
    
})

export class FamiliaComponent{
    public nombre = "Mi Familia";
    public esposa = "Ivanna A. Brito";
    
    public mi_hijos = [
        'Emiliano Valentín',
        'Thiago Jesús',
        'Adriano Jesús'
      ];


}
