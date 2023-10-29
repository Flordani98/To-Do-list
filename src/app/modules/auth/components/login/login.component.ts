import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  

  constructor(private authService: AuthService, private router: Router){} //*inyecto el router para poder navegar a una ruta cuando el inicio sea exitoso

  async onSubmit(){
    //*validaciones de form

    try{
      let isLogin: boolean = await this.authService.login(this.username, this.password); 
      //*me devuelve una promesa, con valor booleano, si se pudo iniciar de manera exitosa o no.
      //*le paso los atributos del usuario para verificar

      if(isLogin){ //*si se inicio sesión correctamente
        this.router.navigate(["/main"]);  
      }else{
        console.log("No se logró iniciar sesión, por favor verifique los datos");
        this.username = '';
        this.password = '';

      }

    }catch(error){
      console.log(error);
    }

    console.log(this.username);
    console.log(this.password);

  }

}