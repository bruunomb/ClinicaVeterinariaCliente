import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {TipoAnimal} from '../../models/TipoAnimal';

@Component({
  selector: 'app-tipo-animal-cadastrar',
  templateUrl: './tipo-animal-cadastrar.component.html',
  styleUrls: ['./tipo-animal-cadastrar.component.css']
})
export class TipoAnimalCadastrarComponent implements OnInit {

  @Input() tipoAnimal: TipoAnimal;
  constructor(private location: Location) { }

  ngOnInit() {
    this.tipoAnimal = new TipoAnimal();
  }
  onSubmit(): void{
    console.log(this.tipoAnimal);
  }
  goBack(): void {
    this.location.back();
  }
}
