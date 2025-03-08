import { TestBed } from '@angular/core/testing';

import { OverwatchService } from './overwatch.service';

describe('OverwatchService', () => {
  let service: OverwatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverwatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
