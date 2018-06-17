import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimaisComponent } from './animais/animais.component';
import { EspecieComponent } from './especie/especie.component';
import { TipoAnimalComponent } from './tipo-animal/tipo-animal.component';
import { AppRoutingModule } from './/app-routing.module';
import { AnimalCadastrarComponent } from './animais/animal-cadastrar/animal-cadastrar.component';
import { AnimalDetailsComponent } from './animais/animal-details/animal-details.component';
import { EspecieDetailsComponent } from './especie/especie-details/especie-details.component';
import { EspecieCadastrarComponent } from './especie/especie-cadastrar/especie-cadastrar.component';
import { TipoAnimalDetailsComponent } from './tipo-animal/tipo-animal-details/tipo-animal-details.component';
import { TipoAnimalCadastrarComponent } from './tipo-animal/tipo-animal-cadastrar/tipo-animal-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaisComponent,
    EspecieComponent,
    TipoAnimalComponent,
    AnimalCadastrarComponent,
    AnimalDetailsComponent,
    EspecieDetailsComponent,
    EspecieCadastrarComponent,
    TipoAnimalDetailsComponent,
    TipoAnimalCadastrarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
