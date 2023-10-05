import { TestBed } from '@angular/core/testing';

import { ServiceHeaderService } from './service-header.service';

describe('ServiceHeaderService', () => {
  let service: ServiceHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
