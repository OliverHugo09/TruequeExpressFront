import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/admin/experience';

const API_URL = 'http://localhost:3000/experience/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(API_URL);
  }

  getExperience(id:number): Observable<Experience>{
    return this.http.get<Experience>(`${API_URL}${id}`)
  }

  addExperience(entity:Experience): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateExperience(id:number,entity:Experience): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteExperience(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
