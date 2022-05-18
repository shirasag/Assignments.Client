import { TestBed } from '@angular/core/testing';

import { AssignmentInterceptor } from './assignment.interceptor';

describe('AssignmentInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AssignmentInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AssignmentInterceptor = TestBed.inject(AssignmentInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
