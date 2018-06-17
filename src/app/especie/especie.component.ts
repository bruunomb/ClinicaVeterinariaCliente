import { Component, OnInit } from '@angular/core';
import {Especie} from '../models/Especie';
@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  especies: Especie[];

  constructor() { }

  ngOnInit() {
    this.getEspecies();
  }

  getEspecies(): void{
    this.especies = [
      { id: 11, nome: 'Mr. Nice', descricao: "1" },
      { id: 12, nome: 'Narco', descricao: "2" },
      { id: 13, nome: 'Bombasto', descricao: "3" },
      { id: 14, nome: 'Celeritas', descricao: "4" },
      { id: 15, nome: 'Magneta', descricao: "5" },
      { id: 16, nome: 'RubberMan', descricao: "Gato" },
      { id: 17, nome: 'Dynama', descricao: "Gato" },
      { id: 18, nome: 'Dr IQ', descricao: "Gato" },
      { id: 19, nome: 'Magma', descricao: "Gato"},
      { id: 20, nome: 'Tornado', descricao: "Gato"}
    ]
  }

}
