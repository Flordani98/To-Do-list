import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/core/models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user: User = new User({ id:null});

  constructor(private authService: AuthService, private router: Router){}


  public onSubmit(){
    this.authService.addUser(this.user);
    this.router.navigate(["/main"]);  
    

  }
}
