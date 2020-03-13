import { Component, OnInit } from '@angular/core';
import { CollaboratorsService } from 'src/app/core/authentication/collaborators.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form-collab',
  templateUrl: './form-collab.component.html',
  styleUrls: ['./form-collab.component.scss']
})
export class FormCollabComponent {

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
    this.router.navigate(['/collab']);
  }

  delete() {
    if(!confirm('Are You Sure Delete ?')) return ;
    this.collaboratorsService.delete(this.id);
    this.router.navigate(['/collab']);
  }

}
