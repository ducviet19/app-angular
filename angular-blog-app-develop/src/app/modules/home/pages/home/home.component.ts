import { CollaboratorsService } from './../../../../core/authentication/collaborators.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
