import { Component, OnInit } from '@angular/core';
import {TipoAnimal} from '../models/TipoAnimal';
@Component({
  selector: 'app-tipo-animal',
  templateUrl: './tipo-animal.component.html',
  styleUrls: ['./tipo-animal.component.css']
})
export class TipoAnimalComponent implements OnInit {

  tipoAnimais: TipoAnimal[];
  constructor() { }

  ngOnInit() {
    this.getTipoAnimal();
  }
  getTipoAnimal(): void{
    this.tipoAnimais = [
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"},
      {acronimo: "CAO", nome: "fala meu bom"}

    ]
  }
}
