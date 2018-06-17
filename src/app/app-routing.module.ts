import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimaisComponent} from './animais/animais.component';
import {TipoAnimalComponent} from './tipo-animal/tipo-animal.component';
import {EspecieComponent} from './especie/especie.component';
import {AnimalCadastrarComponent} from './animais/animal-cadastrar/animal-cadastrar.component';
import {AnimalDetailsComponent} from './animais/animal-details/animal-details.component';
import {EspecieCadastrarComponent} from './especie/especie-cadastrar/especie-cadastrar.component';
import {EspecieDetailsComponent} from './especie/especie-details/especie-details.component';
import {TipoAnimalCadastrarComponent} from './tipo-animal/tipo-animal-cadastrar/tipo-animal-cadastrar.component';
import {TipoAnimalDetailsComponent} from './tipo-animal/tipo-animal-details/tipo-animal-details.component';

const routes: Routes = [
  { path: 'animais', component: AnimaisComponent },
  { path: 'cadastraranimal', component: AnimalCadastrarComponent },
  { path: 'detalhesanimal/:id', component: AnimalDetailsComponent },

  { path: 'especie', component: EspecieComponent },
  { path: 'cadastrarespecie', component: EspecieCadastrarComponent },
  { path: 'detalhesespecie/:id', component: EspecieDetailsComponent },

  { path: 'tipoanimais', component: TipoAnimalComponent },
  { path: 'tipoanimaiscadastrar', component: TipoAnimalCadastrarComponent },
  { path: 'detalhestipoanimal/:acronimo', component: TipoAnimalDetailsComponent},

];
  //detail/:id'
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
