import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stanza } from '../models/stanza';


@Injectable({
  providedIn: 'root'
})
export class MuseumIndexService {
  baseUrl = environment.apiUrl + "stanze/";
  data: Stanza[] = []
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Stanza[]>(this.baseUrl)
  }

  get(id: number) {
    return this.http.get<Stanza>(this.baseUrl + "/" + id)
  }

}
