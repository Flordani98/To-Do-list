import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'tasks-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  public task: Task = new Task({ id: null });

  @Output()
  public addCharacter : EventEmitter<Task> = new EventEmitter();

  constructor(){}

  onSubmit(){
    this.addCharacter.emit(this.task);
  }

}
