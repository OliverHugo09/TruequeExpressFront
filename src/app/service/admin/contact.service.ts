import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/admin/contact';

const API_URL = 'http://localhost:3000/contact/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(API_URL);
  }

  getContact(id:number): Observable<Contact>{
    return this.http.get<Contact>(`${API_URL}${id}`)
  }

  updateContact(id:number,entity:Contact): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

}