import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freetime } from '../../models/admin/freetime';

const API_URL = 'http://localhost:3000/freetime/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FreetimeService {

  constructor(private http: HttpClient) { }

  getFreetimes(): Observable<Freetime[]>{
    return this.http.get<Freetime[]>(API_URL);
  }

  getFreetime(id:number): Observable<Freetime>{
    return this.http.get<Freetime>(`${API_URL}${id}`)
  }

  addFreetime(entity:Freetime): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateFreetime(id:number,entity:Freetime): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteFreetime(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}