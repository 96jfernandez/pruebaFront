import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})

export class LoginService  {
    data: any = [];
    role: any;
    name: any;
    user: any = [];


    constructor(private myService: DataService, private router: Router) { }

    mostrarData() { 
        this.myService.getData().subscribe(res => {
            this.data = res;
              
        }
        );

    }

    loged(formData) { 
       
        this.user = this.data.data.filter(function (item) {
            return item.username == formData.username && item.password == formData.password
        })
        
       if(formData.username !== "" && formData.password !== ""){
         
        if (this.user[0] !== undefined) {
            localStorage.setItem('isLoggedIn', 'true');
             localStorage.setItem('username', this.user[0].username);
             localStorage.setItem('role', this.user[0].role);
            this.router.navigate(['/Home']);
           
        }  else{
             this.router.navigate(['/']);
             alert('usuario/contraseña invalidos')
            localStorage.setItem('isLoggedIn', 'false');
           
        }
        }else{
            alert('Debe ingresar usuario y contraseña')
        }


    }

    logout() {
        console.log("boton log out")
        this.router.navigate(['/']);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('username', '');
        localStorage.setItem('role', '');
    }
}