import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({providedIn: 'root'})
export class AuthService {

    private user!: User; //*mi usuario actual o usuario obtenido mediante el response

    constructor(private apiService: ApiService ) {}

    get currentUser(): User{ /*retorna el usuario actual */
        // if(!this.user) return undefined;
        return structuredClone(this.user);
    }

    public clearUser(){
        this.user = {
            email: '',
            username: '',
            password: '',
            id: 0
          };
    }

    public async login(username: string, password: string): Promise<boolean>{
        let isLogin = false;

        try{
            let apiResponse = this.apiService.getToAuth(username, password); //*recibo la respuesta de la api
            //* ApiService
            let userResponse = await lastValueFrom(apiResponse); //*transformo el observable en una promesa y 
            //*obtengo el valor emitido por el observable (User[])
            this.user = userResponse[0]; //*agarro el primer user del arreglo de user[] y lo guardoen mi authService como atributo

            if(this.user){ //*si hay un usuario?
                localStorage.setItem('token', this.user.id!.toString()); 
                //*guardo en el local storage con la clave 'token', el id de mi usuario actual como string
           
                isLogin = true; //*inicio exitoso, usuario guardado en authService y en el localStorage
          
            }
        }catch (error){
            throw error;
        }
        console.log(this.user);

        return isLogin; //retorno si el inicio fue exitoso o no

    }

    public logout(){
        localStorage.clear();
        this.clearUser();
    }

    public addUser(user: User){
        return new Promise<User>((resolve, reject) =>{
            this.apiService.addUser(user).subscribe({
                next: data => resolve(data),
                error: error => reject(error)
            })
        });
    }
    
    
}