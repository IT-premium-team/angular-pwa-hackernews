import { async, TestBed } from "@angular/core/testing";
import { DataService } from './data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('Service:', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [ApiService]
    }).compileComponents();
  }));

  describe('DataService:', () => {
    const setup = () => {
      const dataService = TestBed.get(DataService);
      const apiService = TestBed.get(ApiService);

      const apiGetSpy = spyOn(apiService, 'get')
        .and
        .callFake(url => of({ mocked: 'response' }));
      const apiPostSpy = spyOn(apiService, 'post')
        .and
        .callFake((url, data) => of({ created: data }));
      const apiPutSpy = spyOn(apiService, 'put')
        .and
        .callFake((url, data) => of({ changed: data }));
      const apiDeleteSpy = spyOn(apiService, 'delete')
        .and
        .callFake((url, data) => of({ deleted: data }));
      return {
        dataService,
        apiService,
        spies: {
          apiGetSpy,
          apiPostSpy,
          apiPutSpy,
          apiDeleteSpy,
        }
      };
    }

    it('should create the service', () => {
      const { dataService } = setup();
      expect(dataService).toBeTruthy();
    });
  
    it('should get user by id', () => {
      const { dataService, spies } = setup();
      const userName = 'someName';
      dataService
        .getUser('someName')
        .subscribe(data => {
          expect(data).toEqual({ mocked: 'response' });
        });
      expect(spies.apiGetSpy).toHaveBeenCalledWith(`user/${userName}.json`);
    });

    it('should get item by id', () => {
      const { dataService, spies } = setup();
      dataService
        .getItem(123456)
        .subscribe(data => {
          expect(data).toEqual({ mocked: 'response' });
        });
      expect(spies.apiGetSpy).toHaveBeenCalledWith(`item/${123456}.json`);
    });
  });
});