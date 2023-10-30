/*snippet: a-service */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, User } from '../models';
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

    //*Tasks

    public getTasks():Observable<Task[]>{
        return this.http.get<Task[]>(`${this.baseURL}/tasks`);

    }
    public deleteTask(id: number):Observable<boolean>{
        return this.http.delete<boolean>(`${this.baseURL}/tasks/${id}`);
    }

    public addTask(task : Task): Observable<Task>{
        return this.http.post<Task>(`${this.baseURL}/tasks`, task) //*el 2do parametro q le paso al post es el BODY
        //*recibimos por parametro la tarea que vamos agregar a la BD de json, y 
        //*¨retorna la misma tarea ya creada(por la doc de json server)
    }

    // public updateTask(task: Task): Observable<boolean>{
    //     return this.http.put<boolean>(`${this.baseURL}/tasks/${task.id}`, task);
    // }
    // updateTask(task : Task): Observable<boolean> {
    //     const url = `${this.baseURL}/tasks/${task.id}`;
    //     return this.http.put<boolean>(url, task);
    //   }

    //   public updateTask(task: Task): Observable<Task> {
    //     if (!task.id) throw Error("Task id is required");
    
    //     return this.http.put<Task>(`${this.baseURL}/tasks/${task.id}`, task);
    //   }

}