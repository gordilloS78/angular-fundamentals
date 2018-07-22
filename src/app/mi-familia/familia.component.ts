import { Component } from '@angular/core';


@Component({
    selector: 'my-family',
    template: `
                <div style="text-align:center">
                <h2> Integrantes de {{nombre}} </h2>
                 <ul>
                    <li>Primero el Amor de mi VIDA: {{esposa}}</li>
                 </ul>
                 <ul>
                    <h3>Mis Hijos:</h3>
                    <li *ngFor="let hijos of mis_hijos"> {{ hijos }} </li>
                </ul> 
    
                 
                </div> `,
        styleUrls: ['./familia.component.css'] 
            
            })
        

export class FamiliaComponent{
    public nombre = "Mi Familia";
    public esposa = "Ivanna A. Brito";
    
    public mis_hijos = [
         'Emiliano Valentín',
        'Thiago Jesús',
        'Adriano Jesús'
      ];


}
