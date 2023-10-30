import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'tasks-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent {

  @Input()
  public taskToModify: Task = {
    id: 0,
    priority: 0,
    description: '',
    done: false
  }

  @Output()
  public taskModifiesToSave: EventEmitter<Task> = new EventEmitter();
  
  public onSubmit(){
    this.taskModifiesToSave.emit(this.taskToModify);
    console.log(this.taskToModify);
  }

}
