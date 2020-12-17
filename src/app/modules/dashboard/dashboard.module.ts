import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AskComponent } from './pages/ask/ask.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NewPostsComponent } from './pages/new-posts/new-posts.component';
import { ShowComponent } from './pages/show/show.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { StoriesBaseComponent } from './pages/stories-base/stories-base.component';

import { CommonTemplateComponent } from './components/common-template/common-template.component';

@NgModule({
  declarations: [
    StoriesBaseComponent,
    AskComponent,
    DashboardComponent,
    JobsComponent,
    NewPostsComponent,
    ShowComponent,
    TrendingComponent,
    CommonTemplateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  exports: [
    StoriesBaseComponent,
    AskComponent,
    DashboardComponent,
    JobsComponent,
    NewPostsComponent,
    ShowComponent,
    TrendingComponent,
    CommonTemplateComponent,
  ],
  providers: [
  ],
})
export class DashboardModule {}