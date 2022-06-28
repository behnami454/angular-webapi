import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stadium } from '../models/stadium.model';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  readonly APIURL = 'https://localhost:44327/Stadium';
  readonly APIURLDelete = 'https://localhost:44327/Stadium/';

  constructor(private http:HttpClient) { }

  // formData: Stadium = new Stadium();
  getStadium():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Stadium')
  }

  getAllStadium():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL)
  }

  addStadium(val:any){
    return this.http.post(this.APIURL+'/Stadium' , val)
  }

  updateStadium(val:any){
    return this.http.put(this.APIURL+'/Stadium' , val)
  }

  deleteStadium(val:any){
    return this.http.delete(this.APIURLDelete+val)
  }

}
