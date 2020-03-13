import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgZorroAntdModule, NzLayoutModule, NzFormModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';

@NgModule({
  declarations: [HomeComponent, ListCollaboratorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutsModule,
    NzButtonModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
  ]
})
export class HomeModule { }
