import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material.module';
import { StoryComponent } from './components/story/story.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StoryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    StoryComponent,
  ],
  providers: [
  ],
})
export class SharedModule {}