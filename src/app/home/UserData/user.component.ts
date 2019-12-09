import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { LoginService } from '../../login.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faEdit = faEdit;
  role:any;
  data:any=[];
  user:any=[];
  users:any[];
  admin=false;
  finalU=false;
  observe=false;
  button:boolean;
  username:any;
  item:any;
  displayedColumns: string[] = [ 'name', 'country', 'description', "action"];
  dataSource =this.users;
  constructor(private myService: DataService,private loginservice: LoginService) { }

  ngOnInit() {
    this.role=localStorage.getItem('role');
    
    
    this.mostrarData();
    this.showByRole()
  }
  mostrarData(){
    this.myService.getData().subscribe(res => {
      this.data = res;
      this.dataSource=this.data.data;
     this.userData();
     this.disableObserve();
    
    }
      );
    
  }

  disableObserve(){
    if(this.role=="ADMINISTRATOR"){
      this.button=false
    }else{
      this.button=true
    }
  }
  showEdit(fuser){
    this.item=fuser
    this.username=fuser.username
   

   
  }
  save(){
   
    this.username=""
  
  }


  showByRole(){
    if(this.role == "ADMINISTRATOR"){
      this.admin=true;
    
    }
    else if(this.role == "USER"){
      this.finalU =true;
     
      
    }else{
      this.observe=true;
   
    }
  }

  userData(){
    var userInfo =this.data.data.filter(function(item){
      return item.username == localStorage.getItem("username")
       })
       this.user.push({
        username:userInfo[0].username,
        name:userInfo[0].name,
        password:userInfo[0].password,
        role:userInfo[0].role,
        country:userInfo[0].country,
        description:userInfo[0].description,
       })
       
     

  }

}
