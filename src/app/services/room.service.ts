import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stanza } from '../models/stanza';
import { OperasService } from './operas.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl = environment.apiUrl + "stanze/";

  constructor(private http: HttpClient, private operaService: OperasService) { }

  get(id: number) {
    return this.http.get<Stanza>(this.baseUrl + id);
  }

}
