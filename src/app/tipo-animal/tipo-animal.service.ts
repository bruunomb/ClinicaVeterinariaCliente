import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Api } from '../shared/api';
import {TipoAnimal} from '../models/TipoAnimal';

@Injectable()
export class TipoAnimalService {

  private url: string = Api._ENDPOINT + "/TipoAnimal";
  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getById(id: number): Promise<TipoAnimal> {        
    return new Promise<TipoAnimal>((resolve, reject) => {
    this.http.get(this.url + "/?id=" + id)
        .map(res => res.json())
        .subscribe(data => {
            console.log(data)
            resolve(data);
        }, (error => {
            reject(error);
        }));
      });
  }

  postTipoAnimal(tipoAnimal){
    this.http.post(this.url, JSON.stringify(tipoAnimal))
    .map(res => res)
    .subscribe(dados => {  
    })
    console.log(tipoAnimal);
  } 

  putTipoAnimal(tipoAnimal){
    console.log(tipoAnimal);
    this.http.put(this.url, JSON.stringify(tipoAnimal))
    .map(res => res)
    .subscribe(dados =>{
    })
  }

  deleteTipoAnimal(tipoAnimal){
    console.log(tipoAnimal);
    this.http.delete(this.url, JSON.stringify(tipoAnimal))
    .map(res => res)
    .subscribe(dados => {
    })
  }
  
}