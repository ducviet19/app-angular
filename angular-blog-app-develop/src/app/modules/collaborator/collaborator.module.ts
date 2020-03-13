import { ManagerComponent } from './manager/manager.component';
import { FormCollabComponent } from './form-collab/form-collab.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgZorroAntdModule, NzLayoutModule, NzFormModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollaboratorRouting } from './collaborator-routing';


@NgModule({
  declarations: [FormCollabComponent,ManagerComponent ],
  imports: [
    CommonModule,
    CollaboratorRouting,
    LayoutsModule,
    NzButtonModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
  ]
})
export class CollaboratorModule { }
