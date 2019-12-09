import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router'
import { LoginService } from '../login.service';

@Component({
  selector: 'login',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  data: any =[];
  form: FormGroup;
  role:any;
  
  constructor(private myService: DataService, private router: Router,private loginservice: LoginService) { }
  ngOnInit() {
    this.loginservice.mostrarData()
  }

home(){
  this.router.navigate(['/Home']);
}
onClickSubmit(formData) {

  this.loginservice.loged(formData)

}


}


