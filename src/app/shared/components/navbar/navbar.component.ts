import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() 
  public isUser: boolean = false; //*recibo el atributo desde donde me llaman MainPageComponent

  constructor(private router: Router, private authService : AuthService){} //*inyecto el servicio para poder desloguear al usuario

  goToLogin(){
    this.router.navigate(["auth/login"]);
  }
  goToRegister(){
    this.router.navigate(["auth/register"]);
  }
  goToHome(){
    this.router.navigate(["home"]);
  }

  goToMain(){
    this.router.navigate(["main"])
  }

  public logOut(){
    this.authService.logout();
    this.router.navigate([''])
  }

}
