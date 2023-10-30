import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Task } from 'src/app/core/models';
import { lastValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {
    
//*NOTA: Actualizar todos los campos de un objeto: PUT
//*Para actualizar un solo atributo: PATCH

    constructor(private apiService: ApiService) {}
    
    public getTasks(): Promise<Task[]>{
        
        return new Promise<Task[]>((resolve, reject) =>{
            this.apiService.getTasks().subscribe({
                next: data => resolve(data),
                error: error => reject(error)
            })
        });
    }

    public deleteTask(idTask : number){
        return new Promise<boolean>((resolve, reject)=>{
            this.apiService.deleteTask(idTask).subscribe({
                next: data => resolve(data),
                error:  error => reject(error)
          })
        });

    }

    public addTask(task: Task){
        return new Promise<Task>((resolve, reject) =>{
            this.apiService.addTask(task).subscribe({
                next: data => resolve(data),
                error: error => reject(error)
            })
        });
    }


    // public async updateTask(task: Task){
    //     this.apiService.updateTask(task).subscribe({
    //         next: () => this.
    //     })

    // public async updateTask(task: Task): Promise<Task | null> {

    //     let resp: Task | null = null;
    
    //     try{
    
    //       const apiResponse = this.apiService.updateTask(task);
    //       resp = await lastValueFrom(apiResponse);
    
    //     }catch(error){
    
    //       throw error;
    //     }
    
    //     return resp;
    
    //   }


    
}