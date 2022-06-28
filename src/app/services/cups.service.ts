import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cups } from '../models/cups.model';

@Injectable({
  providedIn: 'root'
})
export class CupsService {

  readonly APIURL = 'https://localhost:44327/Cups';
  readonly PhotoURL = 'https://localhost:44327/Cups'
  readonly APIURLDelete = 'https://localhost:44327/Cups/';

  constructor(private http:HttpClient) { }

  // formData: Cups = new Cups();


  getCups():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Cups')
  }

  getAllCups():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL)
  }

  addCups(val:any){
    return this.http.post(this.APIURL+'/Cups' , val)
  }

  updateCups(val:any){
    return this.http.put(this.APIURL+'/Cups' , val)
  }

  deleteCups(val:any){
    return this.http.delete(this.APIURLDelete+val)
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIURL+'/Cups/SaveFile' , val)
  }

}
