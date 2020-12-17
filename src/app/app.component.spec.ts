import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PwaService } from './core/services/pwa.service';

describe('Component:', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        ServiceWorkerModule.register('', {enabled: false}),
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
      providers: [
        PwaService,
        SwUpdate,
      ]
    }).compileComponents();
  }));

  describe('AppComponent:', () => {
    const setup = () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return {
        fixture,
        app
      };
    }

    it('should create the app', () => {
      const { app } = setup();
      expect(app).toBeTruthy();
    });

    it('should contain header', () => {
      const { fixture } = setup();
      const header = fixture.debugElement.nativeElement.querySelector('app-header');
      expect(header).toBeTruthy();
    });
  })
});
