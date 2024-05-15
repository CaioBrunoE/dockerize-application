import { TestBed } from '@angular/core/testing';
import { ServicesPayment } from './services.service';

describe('ServicesService', () => {
  let service: ServicesPayment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPayment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
