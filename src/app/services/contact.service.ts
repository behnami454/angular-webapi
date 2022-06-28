import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly APIURL = 'https://localhost:44327/Contacts';
  readonly APIURLDelete = 'https://localhost:44327/Contacts/';


  constructor(private http:HttpClient) { }

  // formData: Contact = new Contact();

  getContact():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Contact')
  }

  getAlContact():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL)
  }

  addContact(val:any){
    return this.http.post(this.APIURL,val)
  }

  updateContact(val:any){
    return this.http.put(this.APIURL+'/Contact' , val)
  }

  deleteContact(val:any){
    return this.http.delete(this.APIURLDelete+val)
  }

}
