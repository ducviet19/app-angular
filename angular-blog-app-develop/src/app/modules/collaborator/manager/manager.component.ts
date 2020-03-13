import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorsService } from 'src/app/core/authentication/collaborators.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  collaborator$;
  id;
  constructor(
    private collaboratorsService: CollaboratorsService,
    private route: ActivatedRoute
  ) {
    this.collaborator$ = this.collaboratorsService.getAll();
  }
  ngOnInit() {}

}
