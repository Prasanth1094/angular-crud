import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listUsers():Observable<any>{
    return this.http.get(`${environment.apiUrl}/users`)
  }
  get(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/` + id);
  }
  create(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/create`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
