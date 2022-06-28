import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  ArticlesList : any=[];
  article:any;

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
    this.articleService.deleteArticles(item.ArticleId).subscribe(data=>{
      this.ArticlesList=data;
    })
  }
  }

  getAllArticles(){
  this.articleService.getAllArticles().subscribe(data=>{
    this.ArticlesList=data;
  })
}

}
