import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  baseUrl = environment.apiUrl + "feedback/";
  data: Feedback[] = []
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Feedback[]>(this.baseUrl);
  }

  get(id: number) {
    //FIXME 404 error
    return this.http.get<Feedback>(this.baseUrl + "/" + id);
  }

  add(f: Feedback) {
    this.http.post<Feedback>(this.baseUrl, f).subscribe({
      next: d => console.log(d) //FIXME deve leggere i guestbook che ha in memoria
    })
  }
}
