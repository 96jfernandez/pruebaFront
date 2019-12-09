import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  name:any;
  role:any;
  data:any=[];
  user:any=[]
 

  constructor(private myService: DataService,private loginservice: LoginService) { }

  ngOnInit() {
    this.role=localStorage.getItem('role')
    
    
    this.mostrarData()
   
  }

  mostrarData(){
    this.myService.getData().subscribe(res => {
      this.data = res;
     this.userData()
    }
      );
    
  }

  userData(){
    var users =this.data.data.filter(function(item){
      return item.username == localStorage.getItem("username")
       })
       this.user.push({
        username:users[0].username,
        name:users[0].name,
        password:users[0].password,
        role:users[0].role,
        country:users[0].country,
        description:users[0].description,
       })
       this.name=this.user[0].name
      

  }


  handleLogout() {
    this.loginservice.logout();
  }

}
