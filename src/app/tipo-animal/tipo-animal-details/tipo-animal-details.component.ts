import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {TipoAnimal} from '../../models/TipoAnimal';

@Component({
  selector: 'app-tipo-animal-details',
  templateUrl: './tipo-animal-details.component.html',
  styleUrls: ['./tipo-animal-details.component.css']
})
export class TipoAnimalDetailsComponent implements OnInit {

  @Input() tipoAnimal: TipoAnimal;
  constructor(private location: Location) { }

  ngOnInit() {
    this.getTipoAnimal();
  }

  getTipoAnimal(): void{
    this.tipoAnimal = {
      acronimo: "CAO", nome: "fala meu bom"
    }
  }

  onSubmit(formulario): void{
    console.log(this.tipoAnimal);
  }
  goBack(){
    this.location.back();
  }
}
