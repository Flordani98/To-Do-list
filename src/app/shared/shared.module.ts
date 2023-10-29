import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        HomePageComponent,
        Error404Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomePageComponent,
        Error404Component,
        NavbarComponent,
        FooterComponent

    ]

})
export class SharedModule { }

