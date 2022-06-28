import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly APIURL = 'https://localhost:44327/Articles';
  readonly APIURLDelete = 'https://localhost:44327/Articles/';
  readonly PhotoURL = 'https://localhost:44327/Articles/SaveFile';

  constructor(private http:HttpClient) { }

  // formData: Article = new Article();

getArticles():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/Articles/{id}')
}

getAllArticles():Observable<any[]>{
  return this.http.get<any[]>(this.APIURL)
}

addArticles(val:any){
  return this.http.post(this.APIURL,val)
}

updateArticles(val:any){
  return this.http.put(this.APIURL,val)
}

deleteArticles(val:any){
  return this.http.delete(this.APIURLDelete+val)
}

uploadPhoto(val:any){
  return this.http.post(this.PhotoURL,val)
}

}
