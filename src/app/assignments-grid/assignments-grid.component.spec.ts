import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsGridComponent } from './assignments-grid.component';

describe('AssignmentsGridComponent', () => {
  let component: AssignmentsGridComponent;
  let fixture: ComponentFixture<AssignmentsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
