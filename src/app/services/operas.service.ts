import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Opera } from '../models/opera';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class OperasService {
  baseUrl = environment.apiUrl + "opere/";
  data: Opera[] = []

  constructor(private http: HttpClient) { }

  getAll() {
    throw new Error("not Implemented")
  }
  get(id: number) {
    throw new Error("not Implemented")
  }
  getOperaByAuthor(idAuhtor: number) {
    return this.http.get<Opera[]>(this.baseUrl + "?autore=" + idAuhtor)
  }
}
