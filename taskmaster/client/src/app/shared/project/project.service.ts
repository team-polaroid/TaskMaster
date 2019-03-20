import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:8080/api/projects';
  //private baseUrl = 'http://3.16.49.56:8080/api/projects';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log('accessing project rest');
    return this.http.get(`${this.baseUrl}`);
  }
}
