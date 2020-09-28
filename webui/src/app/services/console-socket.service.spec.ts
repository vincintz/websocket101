import { TestBed } from '@angular/core/testing';

import { ConsoleSocketService } from './console-socket.service';

describe('ConsoleSocketService', () => {
  let service: ConsoleSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
