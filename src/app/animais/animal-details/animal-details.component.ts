import { Component, OnInit, Input } from '@angular/core';
import {Animal} from '../../models/Animal';
import {Especie} from '../../models/Especie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  @Input() animal: Animal;
  especies: Especie[];
  espe: Especie;
  constructor(private location: Location) { }

  ngOnInit() {
    this.getAnimal();
    this.getEspecies();
  }

  getAnimal(): void{
    this.animal = { id: 11, nome: 'Mr. Nice', nascimento: "06/18/1980" };
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

  onSubmit(formulario): void{
    console.log(this.espe);
  }
  goBack(){
    this.location.back();
  }
}
