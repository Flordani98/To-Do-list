import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';



@NgModule({
  declarations: [
    TasksTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
