import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ControleLivrosService } from './controle-livros.service';

describe('ControleLivrosService', () => {
  let service: ControleLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ControleLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
