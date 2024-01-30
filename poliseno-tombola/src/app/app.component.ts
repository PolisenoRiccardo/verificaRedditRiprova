import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore= new Array();
  stampNumero(NumeroIn: HTMLInputElement): boolean {
    let numero = Number(NumeroIn.value);
    if (!(this.vettore.includes(numero))) {
      console.log(numero);
      this.vettore.push(numero);
      console.log(this.vettore);
    } else if (this.vettore.includes(numero)) {
      alert('Numero già inserito.');
    }
    
    return false
  }
}
