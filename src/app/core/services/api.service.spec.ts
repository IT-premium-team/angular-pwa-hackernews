import { async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('Service:', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [],
      providers: [
        ApiService,
      ]
    }).compileComponents();    
  }));

  describe('ApiService:', () => {
    const setup = () => {
      const apiService = TestBed.get(ApiService);
      const httpClient = TestBed.get(HttpTestingController);
      return {
        apiService,
        httpClient
      };
    }

    const testIdArray: number[] = [
      12345, 3243443, 4545675757, 7768, 867867, 8786, 678678,
    ];

    it('should create the service', () => {
      const { apiService } = setup();
      expect(apiService).toBeTruthy();
    });
  
    it('should make get query', () => {
      const { apiService, httpClient } = setup();
      apiService
        .get('test-route.json')
        .subscribe(data => {
          expect(data).toEqual(testIdArray);
        });

      const req = httpClient.expectOne('https://hacker-news.firebaseio.com/v0/test-route.json');
      expect(req.request.method).toBe('GET');

      req.flush(testIdArray);
    });

    it('should make post query', () => {
      const { apiService, httpClient } = setup();
      apiService
        .post('test-route.json', { test: 'data' })
        .subscribe(data => {
          expect(data).toEqual({ test: 'data' });
        });

      const req = httpClient.expectOne({
        url: 'https://hacker-news.firebaseio.com/v0/test-route.json',
        method: 'POST'
      });

      expect(req.request.method).toBe('POST');

      req.flush({ test: 'data' });
    });

    it('should make put query)', () => {
      const { apiService, httpClient } = setup();
      apiService
        .put('test-route.json', { test: 'some-data' })
        .subscribe(data => {
          expect(data).toEqual({ test: 'some-data' });
        });

      const req = httpClient.expectOne({
        url: 'https://hacker-news.firebaseio.com/v0/test-route.json',
        method: 'PUT'
      });
      expect(req.request.method).toBe('PUT');

      req.flush({ test: 'some-data' });
    });

    it('should make delete query', () => {
      const { apiService, httpClient } = setup();
      apiService
        .delete('test-route.json', { id: 'test-id-123' })
        .subscribe(deletedItem => {
          expect(deletedItem).toEqual({ id: 'test-id-123' });
        });

      const req = httpClient.expectOne({
        url: 'https://hacker-news.firebaseio.com/v0/test-route.json',
        method: 'DELETE'
      });

      expect(req.request.method).toBe('DELETE');

      req.flush({ id: 'test-id-123' });
    });

    afterEach(() => {
      const { httpClient } = setup();
      httpClient.verify();
    });
  });
});