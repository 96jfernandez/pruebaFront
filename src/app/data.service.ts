import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpService: HttpClient ) {  }
    public getData() {
      return this.httpService.get('http://localhost:4200/assets/data1.json')
     
    }

    
}
