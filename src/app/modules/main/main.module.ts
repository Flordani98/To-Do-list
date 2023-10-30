import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksModule } from '../tasks/tasks.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule, //*SIEMPRE IMPORTAR el modulo ROUTING si estoy usando rutas en este modulo
    SharedModule,
    TasksModule, //*para poder pasarle las tasks de la service
    FormsModule
  ]
})
export class MainModule { }
