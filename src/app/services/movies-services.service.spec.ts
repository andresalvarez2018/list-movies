import { TestBed } from '@angular/core/testing';

import { MoviesServicesService } from './movies.service';

describe('MoviesServicesService', () => {
  let service: MoviesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
