import { CollaboratorsService } from './../../../core/authentication/collaborators.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss']
})
export class ListCollaboratorComponent {
  loading = false;
  collaborator: any = {} ;
  id;
  constructor(private collaboratorsService : CollaboratorsService , private route : ActivatedRoute , private router : Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.collaboratorsService.get(this.id).valueChanges().pipe(take(1)).subscribe(c => this.collaborator = c)
   }

  save(product) {
    if(this.id) this.collaboratorsService.update(this.id , product);

    else this.collaboratorsService.create(product);
    this.router.navigate(['/home']);
  }

  delete() {
    if(!confirm('Are You Sure Delete ?')) return ;
    this.collaboratorsService.delete(this.id);
    this.router.navigate(['/home']);
  }
}
