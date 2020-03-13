import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule ,
    DashboardRoutingModule,
    NgZorroAntdModule,
    NzLayoutModule,
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule { }
