import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {
  constructor(private db : AngularFireDatabase ) {}

  create(product) {
    this.db.list('/collaborator').push(product);
  }


  getAll() {
    return this.db.list('/collaborator').snapshotChanges().pipe(
      map((collaborator: any[]) => collaborator.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return { key, ...payload } as any;
      }))
    )
}

get(productId) {
  return this.db.object('/collaborator/' + productId);
}

update(productId , product) {
  return this.db.object('/collaborator/' + productId).update(product);
}
delete(productId) {
  return this.db.object('/collaborator/' + productId).remove();
}

}
