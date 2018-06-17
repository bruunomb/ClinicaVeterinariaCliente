import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Api } from '../shared/api';
import {Especie} from '../models/Especie';

@Injectable()
export class EspecieService {

  private url: string = Api._ENDPOINT + "/especie";
  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getById(id: number): Promise<Especie> {        
    return new Promise<Especie>((resolve, reject) => {
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

  postAnimal(especie){
    this.http.post(this.url, JSON.stringify(especie))
    .map(res => res)
    .subscribe(dados => {  
    })
    console.log(especie);
  } 

  putEspecie(especie){
    console.log(especie);
    this.http.put(this.url, JSON.stringify(especie))
    .map(res => res)
    .subscribe(dados =>{
    })
  }

  deleteEspecie(especie){
    console.log(especie);
    this.http.delete(this.url, JSON.stringify(especie))
    .map(res => res)
    .subscribe(dados => {
    })
  }
  
}