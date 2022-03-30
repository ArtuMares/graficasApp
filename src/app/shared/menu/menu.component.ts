import { Component } from '@angular/core';
  interface menuItem{
    ruta:string,
    texto:string
  }
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent  {

  constructor() { }

  menu: menuItem[] = [
    {ruta: "/graficas/barras", texto: "Barras"},
    {ruta: "/graficas/barras-doble", texto: "Barras dobles"},
    {ruta: "/graficas/dona", texto: "Dona"},
    {ruta: "/graficas/donaHttp", texto: "Dona desde Http"},
  ]

}
