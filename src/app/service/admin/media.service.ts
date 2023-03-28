import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../../models/admin/media';

const API_URL = 'http://localhost:3000/media/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getMedias(): Observable<Media[]>{
    return this.http.get<Media[]>(API_URL);
  }

  getMedia(id:number): Observable<Media>{
    return this.http.get<Media>(`${API_URL}${id}`)
  }

  addMedia(entity:Media): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateMedia(id:number,entity:Media): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteMedia(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}