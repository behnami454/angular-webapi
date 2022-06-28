import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { LoadingService } from 'src/app/services/loading.service';
import AOS from "aos";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  loading$ = this.loader.loading$;
  ArticlesList : any=[];

  constructor(public articleService: ArticleService,public loader: LoadingService) { }

  ngOnInit(): void {
    this.getAllArticles();
    AOS.init();
  }
  getAllArticles(){
  this.articleService.getAllArticles().subscribe(data=>{
    this.ArticlesList=data;
  })
}



}
