import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent {
  @Input()
  public tasks: Task[] = []; //*recibe la tasks en el mainPageComponent

  @Output()
  public deletedTask : EventEmitter<number> = new EventEmitter();

  // @Output()
  // public editTask : EventEmitter<Task> = new EventEmitter();

  public deleteTask( idTask : number): void{
    this.deletedTask.emit(idTask)
  }

  // public updateTask( task : Task): void{
  //   this.editTask.emit(task);
  // }



}
