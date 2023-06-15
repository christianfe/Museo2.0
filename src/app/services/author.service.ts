import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Autore } from '../models/autore';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  baseUrl = environment.apiUrl + "autori";
  data: Autore[] = []
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Autore[]>(this.baseUrl)
  }

  get(id: number) {
    return this.http.get<Autore>(this.baseUrl + "/" + id)
  }

  getByFilterNome(filter : string){
    console.log(this.baseUrl + `?nome_like=^(${filter}).*`);
    return this.http.get<Autore[]>(this.baseUrl + `?nome_like=^(${filter}).*`);
  }

  getByFilterCognome(filter : string){
    console.log(this.baseUrl + `?cognome_like=^(${filter}).*`);
    return this.http.get<Autore[]>(this.baseUrl + `?cognome_like=^(${filter}).*`);
  }

  getByFilterSoprannome(filter : string){
    console.log(this.baseUrl + `?soprannome_like=^(${filter}).*`);
    return this.http.get<Autore[]>(this.baseUrl + `?soprannome_like=^(${filter}).*`);
  }

}
