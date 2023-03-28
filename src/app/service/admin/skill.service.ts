import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../models/admin/skill';

const API_URL = 'http://localhost:3000/skill/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(API_URL);
  }

  getSkill(id:number): Observable<Skill>{
    return this.http.get<Skill>(`${API_URL}${id}`)
  }

  addSkill(entity:Skill): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateSkill(id:number,entity:Skill): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteSkill(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}