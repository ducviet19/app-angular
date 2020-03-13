
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/core/authentication/article.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit , OnDestroy {

  article : Article[];
  filterArticle : any [];
  subscription  : Subscription;

  constructor(private articleService : ArticleService) {
    this.subscription = this.articleService.getAll().subscribe(article =>this.filterArticle=this.article = article)
  }

  filter(query : string) {
    this.filterArticle = (query) ?
     this.article.filter(a => a.title.toLowerCase().includes(query.toLowerCase())) : 
     this.article;
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  
}
