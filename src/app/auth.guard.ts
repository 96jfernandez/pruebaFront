import {    CanActivate, ActivatedRouteSnapshot,    RouterStateSnapshot} from '@angular/router';import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private loginservice: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
     boolean
     {
        if (this.isLoggedIn()) {
            // if we return true user is allowed to access that route
            return true;
        } else {
            // if we return false user is not allowed to access
            return false;
        }
    }
    public isLoggedIn(): boolean {      
        let status = false;      
        if (localStorage.getItem('isLoggedIn') === "true") {  
            console.log(localStorage.getItem('isLoggedIn'),"authguar")    
           status = true;      
        }    
        else {  
            console.log(localStorage.getItem('isLoggedIn'),"authguar")     
           status = false;      
           }      
        return status;     
     
        }    
      

}