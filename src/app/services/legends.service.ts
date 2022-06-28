import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Legends } from '../models/legends.model';

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  readonly APIURL = 'https://localhost:44327/Legends';
  readonly PhotoURL = 'https://localhost:44327/SavedFile';
  readonly APIURLDelete = 'https://localhost:44327/Legends/';

  constructor(private http:HttpClient) { }

  // formData: Legends = new Legends();

  getLegends():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Legends')
  }

  getAllLegends():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL)
  }

  addLegends(val:any){
    return this.http.post(this.APIURL+'/Legends' , val)
  }

  updateLegends(val:any){
    return this.http.put(this.APIURL+'/Legends' , val)
  }

  deleteLegends(val:any){
    return this.http.delete(this.APIURLDelete+val)
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIURL+'/Legends/SaveFile' , val)
  }
}
