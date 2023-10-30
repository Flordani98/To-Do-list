import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Task } from 'src/app/core/models';
import { TaskService } from 'src/app/modules/tasks/services/task.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  public tasks : Task[] = [];



  constructor(private taskService: TaskService){}

  ngOnInit(){ //*metodo del ciclo de vida de un componente,
    //* antes de q se renderice la vista primero cargo las tasks
    this.searchTasks()

  }

  public searchTasks(){
    this.taskService.getTasks().then(data => this.tasks = data); 
    //*si la promesa se resuelve bien entoncees, se guarda en tasks las tasks devueltas por la taskservice
  }

  public deleteTask(idTask : number){
    this.taskService.deleteTask(idTask);
    this.searchTasks(); //*para que se actualice mi arreglo de tasks desde la db.json
  }

  public addTask(task : Task){
    this.taskService.addTask(task);
    this.searchTasks();
  }
 



  
  // public updateTask(task : Task){

  //   const dialogRef = this.dialog.open(EditTaskComponent, {data: task, height:'400px', width: '350px' }) 
  //   console.log(task);
  //   //*Con el dialog.open indico q el dialogo se abra y cuando se abra, lo haga con un componente, EditPersonComponent,
  //   //* y en el 2do parametro le voy a pasar la data(el objeto task)


  
}
