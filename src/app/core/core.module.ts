import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NotFoundPageComponent,
    HeaderComponent,
  ],
  providers: [

  ],
})
export class CoreModule {}