import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssignmentFormComponent } from './new-assignment-form.component';

describe('NewAssignmentFormComponent', () => {
  let component: NewAssignmentFormComponent;
  let fixture: ComponentFixture<NewAssignmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssignmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
