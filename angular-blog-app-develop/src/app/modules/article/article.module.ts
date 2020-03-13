import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './manager/article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { FormArticleComponent } from './form-article/form-article.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule , 
    ArticleRoutingModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
  ],
  declarations: [ArticleComponent, FormArticleComponent],
  exports: []
})
export class ArticleModule { }
