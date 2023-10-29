import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes : Routes = [
    {
        path: 'auth',
        loadChildren: () => import("./modules/auth/auth.module").then( m => m.AuthModule)
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }
]


@NgModule({
    imports: [ RouterModule.forRoot( routes )],
    exports: [ RouterModule ],

})
export class AppRoutingModule { }
