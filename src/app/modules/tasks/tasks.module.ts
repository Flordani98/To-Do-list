import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { ModifyTaskComponent } from './components/modify-task/modify-task.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TasksTableComponent,
    AddTaskComponent,
    ModifyTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  exports:[
    TasksTableComponent,
    AddTaskComponent,
    ModifyTaskComponent
  ]
})
export class TasksModule { }
