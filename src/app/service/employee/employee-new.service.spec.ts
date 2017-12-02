import { TestBed, inject } from '@angular/core/testing';

import { EmployeeNewService } from './employee-new.service';

describe('EmployeeNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeNewService]
    });
  });

  it('should be created', inject([EmployeeNewService], (service: EmployeeNewService) => {
    expect(service).toBeTruthy();
  }));
});
