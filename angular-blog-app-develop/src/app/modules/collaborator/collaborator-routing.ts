import { FormCollabComponent } from './form-collab/form-collab.component';
import { ManagerComponent } from './manager/manager.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'new', component: FormCollabComponent  },
  { path: ':id', component: FormCollabComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRouting { }
