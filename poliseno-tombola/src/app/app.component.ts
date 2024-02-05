import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore= new Array();
  numero: Number;
  stampNumero(NumeroIn: HTMLInputElement): boolean {
    this.numero = Number(NumeroIn.value);
    if (!(this.vettore.includes(this.numero))) {
      console.log(this.numero);
      this.vettore.push(this.numero);
      console.log(this.vettore);
    } else if (this.vettore.includes(this.numero)) {
      alert('Numero già inserito.');
    }

    
    return false
  }
}
