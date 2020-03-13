
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/authentication/article.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {
  article : any = {};
  id;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.articleService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.article = p)
  }

  ngOnInit(): void {}

  save(article) {
    if(this.id) this.articleService.update(this.id , article)
    else
    this.articleService.create(article);
    this.router.navigate(['/article'])
  }

  delete() {
    if(!confirm('Are You Sure Delete ?')) return ;

    this.articleService.delete(this.id);
    this.router.navigate(['/article'])
  }
}
