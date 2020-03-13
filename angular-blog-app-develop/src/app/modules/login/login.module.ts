import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NgZorroAntdModule, NzLayoutModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule ,
    LoginRoutingModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    LoginRoutingModule
  ],
  exports : []
})
export class LoginModule { }
