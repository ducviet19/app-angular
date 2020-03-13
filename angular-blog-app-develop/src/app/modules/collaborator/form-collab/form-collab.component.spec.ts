import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollabComponent } from './form-collab.component';

describe('FormCollabComponent', () => {
  let component: FormCollabComponent;
  let fixture: ComponentFixture<FormCollabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCollabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
