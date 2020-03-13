import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const LAYOUTS_COMPONENT = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...LAYOUTS_COMPONENT
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...LAYOUTS_COMPONENT
  ]
})
export class LayoutsModule { }
