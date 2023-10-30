import { Component, EventEmitter, Input, Output, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/core/models';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tasks-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit{

  @Input()
  public taskToModify: Task = {
    id: 0,
    priority: 0,
    description: '',
    done: false
  }

  // @Output()//antes mandaba la task a modificar al home-page y ahi se realizaba la actualización
  // public taskModifiesToSave: EventEmitter<Task> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService, private dialogRef: MatDialogRef<ModifyTaskComponent>) {}
  ngOnInit(): void {
    this.taskToModify = this.data;
  }
  
  public onSubmit(){
    // this.taskModifiesToSave.emit(this.taskToModify); //antes
    this.taskService.updateTask(this.taskToModify);
    this.closeDialog();
    console.log(this.taskToModify);
  }

  public closeDialog(){
    this.dialogRef.close(false);
  }

}
