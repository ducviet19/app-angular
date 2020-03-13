import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private db: AngularFireDatabase) {}

  create(article) {
    return this.db.list('article').push(article);
  }

  getAll() {
    return this.db
      .list('/article')
      .snapshotChanges()
      .pipe(
        map((collaborator: any[]) =>
          collaborator.map(prod => {
            const payload = prod.payload.val();
            const key = prod.key;
            return { key, ...payload } as any;
          })
        )
      );
  }

  get(articleId) {
    return this.db.object('/article/' + articleId);
  }

  update(articleId , article) {
    return this.db.object('/article/' + articleId).update(article);
  }


  delete(articleId) {
    return this.db.object('/article/' + articleId).remove();
  }
}
