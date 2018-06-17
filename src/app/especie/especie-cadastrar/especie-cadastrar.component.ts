import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {Especie} from '../../models/Especie';

@Component({
  selector: 'app-especie-cadastrar',
  templateUrl: './especie-cadastrar.component.html',
  styleUrls: ['./especie-cadastrar.component.css']
})
export class EspecieCadastrarComponent implements OnInit {

  @Input() especie: Especie;
  constructor(private location: Location) { }

  ngOnInit() {
    this.especie = new Especie();
  }

  onSubmit(): void{
    console.log(this.especie);
  }
  goBack(): void {
    this.location.back();
  }
}
