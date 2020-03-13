import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TypicodeInterceptor } from './interceptors/typicode.interceptors';

const CORE_COMPONENT = [];
@NgModule({
  declarations: [...CORE_COMPONENT],
  imports: [
    CommonModule
  ],
  exports: [...CORE_COMPONENT],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TypicodeInterceptor,
    multi: true
  }]
})
export class CoreModule { }
