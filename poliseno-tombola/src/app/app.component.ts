import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore= new Array();
  stampNumero(NumeroIn: HTMLInputElement): boolean {
    if (!(this.vettore.includes(NumeroIn.value))) {
      console.log(NumeroIn.value);
      this.vettore.push(NumeroIn.value);
      console.log(this.vettore);
    } else if (this.vettore.includes(NumeroIn.value)) {
      console.log('Numero già inserito.');
    }
    
    return false
  }
}
