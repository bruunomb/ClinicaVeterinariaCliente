import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Api } from '../shared/api';
import {Animal} from '../models/Animal';

@Injectable()
export class AnimaisService {

  private url: string = Api._ENDPOINT + "/animais";
  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getById(id: number): Promise<Animal> {        
    return new Promise<Animal>((resolve, reject) => {
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

  postAnimal( animal){
    this.http.post(this.url, JSON.stringify(animal))
    .map(res => res)
    .subscribe(dados => {  
    })
    console.log(animal);
  } 

  putAnimal(animal){
    console.log(animal);
    this.http.put(this.url, JSON.stringify(animal))
    .map(res => res)
    .subscribe(dados =>{
    })
  }

  deleteAnimal(animal){
    console.log(animal);
    this.http.delete(this.url, JSON.stringify(animal))
    .map(res => res)
    .subscribe(dados => {
    })
  }
  
}
