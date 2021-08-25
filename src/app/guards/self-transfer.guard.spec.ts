import { TestBed } from '@angular/core/testing';

import { SelfTransferGuard } from './self-transfer.guard';

describe('SelfTransferGuard', () => {
  let guard: SelfTransferGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelfTransferGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
