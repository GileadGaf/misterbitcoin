import { TestBed } from '@angular/core/testing';

import { ContactResolveService } from './contact-resolve.service';

describe('ContactResolveService', () => {
  let service: ContactResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
