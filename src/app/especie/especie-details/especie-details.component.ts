import { Component, OnInit, Input } from '@angular/core';
import {Especie} from '../../models/Especie';
import { Location } from '@angular/common';


@Component({
  selector: 'app-especie-details',
  templateUrl: './especie-details.component.html',
  styleUrls: ['./especie-details.component.css']
})
export class EspecieDetailsComponent implements OnInit {

  @Input() especie: Especie;
  constructor(private location: Location) { }

  ngOnInit() {
    this.getEspecie();
  }

  getEspecie(): void{
    this.especie = 
      { id: 11, nome: 'Mr. Nice', descricao: "1" }
  }

  onSubmit(formulario): void{
    console.log(this.especie);
  }
  goBack(){
    this.location.back();
  }
}
