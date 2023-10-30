import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/core/models';
import { ModifyTaskComponent } from 'src/app/modules/tasks/components/modify-task/modify-task.component';
import { TaskService } from 'src/app/modules/tasks/services/task.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  public tasks : Task[] = [];
  public taskToModify: Task = {
    id: 0,
    priority: 0,
    description: '',
    done: false
  }
  constructor(private taskService: TaskService, private dialog: MatDialog){}

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
  //   this.taskService.updateTask(task);
  //   this.searchTasks();
  // }

  // public saveTask(task : Task){ //*guarda mi task en mi main-page y lo pasa al componente modifyTask mediante un input
  //   this.taskToModify = task;
  //   this.searchTasks();
  // }
 
  public saveTask(task: Task) {

    const dialogRef = this.dialog.open(ModifyTaskComponent, { data: task, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
      this.searchTasks();
      console.log("se actualizo?!??!?!");
    });
  }



  
  // public updateTask(task : Task){

  //   const dialogRef = this.dialog.open(EditTaskComponent, {data: task, height:'400px', width: '350px' }) 
  //   console.log(task);
  //   //*Con el dialog.open indico q el dialogo se abra y cuando se abra, lo haga con un componente, EditPersonComponent,
  //   //* y en el 2do parametro le voy a pasar la data(el objeto task)


  
}
