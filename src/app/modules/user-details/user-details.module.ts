import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserDetailsRoutingModule,
  ],
  exports: [
    UserDetailsComponent,
  ],
  providers: [
  ],
})
export class UserDetailsModule {}