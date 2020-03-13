
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './manager/article.component';
import { FormArticleComponent } from './form-article/form-article.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'new', component: FormArticleComponent },
  { path: ':id', component: FormArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
