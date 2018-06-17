import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/Animal';
@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {

  animais: Animal[];

  constructor() { }

  ngOnInit() {
    this.getAnimais();
  }

  getAnimais(): void {
      this.animais = [
      { id: 11, nome: 'Mr. Nice', nascimento: "06/18/1980" },
      { id: 12, nome: 'Narco', nascimento: "06/18/1980" },
      { id: 13, nome: 'Bombasto', nascimento: "06/18/1980" },
      { id: 14, nome: 'Celeritas', nascimento: "06/18/1980" },
      { id: 15, nome: 'Magneta', nascimento: "06/18/1980" },
      { id: 16, nome: 'RubberMan', nascimento: "06/18/1980" },
      { id: 17, nome: 'Dynama', nascimento: "06/18/1980" },
      { id: 18, nome: 'Dr IQ', nascimento: "06/18/1980" },
      { id: 19, nome: 'Magma', nascimento: "06/18/1980"},
      { id: 20, nome: 'Tornado', nascimento: "06/18/1980"}
    ];
  }  
}
