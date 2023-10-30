import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksTableComponent,
    AddTaskComponent,
    // EditTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TasksTableComponent,
    AddTaskComponent,
    // EditTaskComponent
  ]
})
export class TasksModule { }
