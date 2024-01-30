import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent implements OnInit {
@Input() NumeroIn: HTMLInputElement;
numero: Number;
constructor() {
  this.numero = Number(this.NumeroIn.value)
}

@Input() vettore: any[];
  ngOnInit(): void {
  
}
}
