import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './components/comment/comment.component';
import { ThreadComponent } from './components/thread/thread.component';
import { StoryDetailsComponent } from './pages/story-details/story-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoryDetailsRoutingModule } from './story-details-routing.module';

@NgModule({
  declarations: [
    CommentComponent,
    ThreadComponent,
    StoryDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoryDetailsRoutingModule,
  ],
  exports: [
    CommentComponent,
    ThreadComponent,
    StoryDetailsComponent,
  ],
  providers: [
  ],
})
export class StoryDetailsModule {}