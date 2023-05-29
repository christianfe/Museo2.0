import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stanza } from '../models/stanza';
import { OperasService } from './operas.service';
import { Opera } from '../models/opera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl = environment.apiUrl + "stanze/";

  constructor(private http: HttpClient, private opereService: OperasService) { }

  getAll() {
    throw new Error("not Implemented")
  }
  get(id: number) {
    throw new Error("not Implemented")
  }
}
