
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AccordionService } from './accordion.service';

describe('AccordionService', () => {
  let service: AccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AccordionService]
    });
    service = TestBed.inject(AccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

 