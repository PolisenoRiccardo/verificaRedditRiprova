import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore= new Array();
  stampNumero(NumeroIn: HTMLInputElement): boolean {
    
    if (!(NumeroIn.value in this.vettore)) {
      console.log(NumeroIn.value)
      this.vettore.push(NumeroIn.value)
      console.log(this.vettore)
    } else if (NumeroIn.value in this.vettore) {console.log('Numero già inserito.')}
    
    return false
  }
}
