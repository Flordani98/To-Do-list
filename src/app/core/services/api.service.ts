/*snippet: a-service */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

    private baseURL = "http://localhost:3000";

    constructor(private http: HttpClient) /*Importar en appModule el HttpClienteModule */ {}

    //* Users

    public getToAuth(username: string, password: string): Observable<User[]>{
        return this.http.get<User[]>(`${this.baseURL}/users?username=${username}&password=${password}`);
        // http://localhost:3000/users?username=flor&password=123
        //definimos la peticion http para obtener el usuario que se quiere autenticar

    }
    

}