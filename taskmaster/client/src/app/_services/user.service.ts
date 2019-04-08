import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    serverUrl = 'http://localhost:4200/login'

    getAll() {
        return this.http.get<User[]>(`${this.serverUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.serverUrl}/users/${id}`);
    }
}